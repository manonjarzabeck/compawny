"use client";

import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod/v3";
import type { Action } from "../../../../models/action";
import type { UserActionsFormContentProps } from "../../../models/props/user_action_form_content_props";
import ActionApiService from "../../../services/action_api_service";
import styles from "./action-proposition-form.module.css";

const UserActionForm = ({ validator }: UserActionsFormContentProps) => {
	// Génère des identifiants uniques pour l’accessibilité des champs
	const nameId = useId();
	const descriptionId = useId();
	const associationProposalId = useId();

	// Gère les messages d’état du formulaire
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	// Stocke les erreurs de validation renvoyées côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Action>>({});

	// React Hook Form :
	// - register : relie les champs au formulaire
	// - handleSubmit : intercepte la soumission
	// - reset : permet de préremplir les champs en mode modification
	// - errors : contient les erreurs de validation côté client
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Action>>();

	// Soumission du formulaire
	const submitForm = async (data: Partial<Action>) => {
		const normalizedData = { ...data };

		// Validation des données avant envoi
		const validation = await validator(normalizedData);

		if (validation instanceof Error) {
			let formErrors = {};
			// Transformation des erreurs de validation
			// en objet exploitable dans le formulaire
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

		// Préparation des données à envoyer à l’API
		const formData = new FormData();

		formData.set("name", normalizedData.name as string);
		formData.set("description", normalizedData.description as string);
		formData.set(
			"association_proposal",
			normalizedData.association_proposal as string,
		);

		// L’action proposée n’est pas publiée automatiquement
		formData.set("is_active", "0");

		// Permet d’identifier l’origine de la proposition
		formData.set("source", "visitor");

		// Champs laissés vides car ils seront complétés ou validés plus tard
		formData.set("published", "");
		formData.set("association_id", "");
		formData.set("image", "");

		// Envoi du formulaire à l’API
		const process = await new ActionApiService().insert(formData);

		if ([200, 201].includes(process.status)) {
			setMessage("Notre équipe de modération va s'occuper du reste 🐾");
			setSubmitted(true);
			reset();
		} else {
			setMessage("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	// Affichage d’un message de confirmation après envoi réussi
	if (submitted) {
		return (
			<div className={styles.formCard}>
				<div className={styles.successBox}>
					<h2 className={styles.formTitle}>Merci beaucoup 🤎</h2>
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
								value: 5,
								message: "Minimum 5 caractères",
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
