"use client";

import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod/v3";
import type { Action } from "../../../../models/action";
import type { UserActionsFormContentProps } from "../../../models/props/user_action_form_content_props";
import ActionApiService from "../../../services/action_api_service";
import SecurityService from "../../../services/security_service";
import styles from "./action-proposition-form.module.css";

const UserActionForm = ({ validator }: UserActionsFormContentProps) => {
	const nameId = useId();
	const descriptionId = useId();
	const associationProposalId = useId();

	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [serverErrors, setServerErrors] = useState<Partial<Action>>({});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Action>>();

	const submitForm = async (data: Partial<Action>) => {
		const normalizedData = { ...data };

		const validation = await validator(normalizedData);

		if (validation instanceof Error) {
			let formErrors = {};

			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				formErrors = {
					...formErrors,
					[item.path.shift() as string]: item.message,
				};
				return formErrors;
			});

			setServerErrors(formErrors);
			return;
		}

		setServerErrors({});

		const formData = new FormData();

		formData.set("name", normalizedData.name as string);
		formData.set("description", normalizedData.description as string);
		formData.set(
			"association_proposal",
			normalizedData.association_proposal as string,
		);

		formData.set("is_active", "0");
		formData.set("source", "visitor");
		formData.set("published", "");
		formData.set("association_id", "");

		const process = await new ActionApiService().insert(
			formData,
			new SecurityService().getToken() as string,
		);

		if ([200, 201].includes(process.status)) {
			setMessage("Notre équipe de modération va s'occuper du reste 🐾");
			setSubmitted(true);
			reset();
		} else {
			setMessage("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	if (submitted) {
		return (
			<div className={styles.formCard}>
				<div className={styles.successBox}>
					<h2 className={styles.formTitle}>Merci beaucoup 💚</h2>
					<p className={styles.successText}>{message}</p>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.formCard}>
			<form className={styles.form} onSubmit={handleSubmit(submitForm)}>
				<div className={styles.field}>
					<label htmlFor={nameId}>Nom de l'action</label>
					<input
						type="text"
						id={nameId}
						placeholder="Ex. : Collecte de croquettes solidaire"
						{...register("name", {
							required: "Le nom est obligatoire",
							minLength: {
								value: 2,
								message: "Minimum 2 caractères",
							},
						})}
					/>
					<small>{errors.name?.message ?? serverErrors?.name}</small>
				</div>

				<div className={styles.field}>
					<label htmlFor={associationProposalId}>Nom de l'association</label>
					<input
						type="text"
						id={associationProposalId}
						placeholder="Ex. : Les Pattes du Cœur"
						{...register("association_proposal", {
							required: "Le nom de l'association est obligatoire",
							minLength: {
								value: 2,
								message: "Minimum 2 caractères",
							},
						})}
					/>
					<small>
						{errors.association_proposal?.message ??
							serverErrors?.association_proposal}
					</small>
				</div>

				<div className={styles.field}>
					<label htmlFor={descriptionId}>Description</label>
					<textarea
						id={descriptionId}
						rows={6}
						placeholder="Décrivez l'action, le lieu, le fonctionnement, ou toute information utile..."
						{...register("description", {
							required: "La description est obligatoire",
							minLength: {
								value: 20,
								message: "Minimum 20 caractères",
							},
						})}
					/>
					<small>
						{errors.description?.message ?? serverErrors?.description}
					</small>
				</div>

				<button className={styles.submitButton} type="submit">
					Proposer une action 🫶🏼
				</button>

				{message && !submitted && (
					<p className={styles.feedbackMessage}>{message}</p>
				)}
			</form>
		</div>
	);
};

export default UserActionForm;
