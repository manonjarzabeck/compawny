"use client";

import React, { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { Action } from "../../../../models/action";
import styles from "../../../assets/css/admin_form_content.module.css";
import type { AdminActionsFormContentProps } from "../../../models/props/admin/admin_actions_form_content_props";
import ActionApiService from "../../../services/action_api_service";
import SecurityService from "../../../services/security_service";

const AdminActionsFormContent = ({
	association,
	validator,
	dataToUpdate,
}: AdminActionsFormContentProps) => {
	const nameId = useId();
	const descriptionId = useId();
	const isactiveId = useId();
	const idId = useId();
	const associationId = useId();
	const imageId = useId();
	const publishedId = useId();

	const [serverErrors, setServerErrors] = useState<Partial<Action>>();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Action>>();

	useEffect(() => {
		if (dataToUpdate) {
			const normalizedData = {
				...dataToUpdate,
				published: dataToUpdate.published
					? new Date(dataToUpdate.published).toISOString().split("T")[0]
					: "",
			};

			reset(normalizedData);
		}
	}, [dataToUpdate, reset]);

	const [message, setMessage] = useState<string>("");

	const navigate = useNavigate();

	const submitForm = async (data: Partial<Action>) => {
		const normalizedData = { ...data, image: (data.image as string)[0] };

		const validation = await validator(normalizedData);

		if (validation instanceof Error) {
			let errors = {};

			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				errors = { ...errors, [item.path.shift() as string]: item.message };
				return errors;
			});

			setServerErrors(errors);
			return;
		}

		const formData = new FormData();

		formData.set("id", normalizedData.id as unknown as string);
		formData.set("name", normalizedData.name as unknown as string);
		formData.set("image", normalizedData.image as unknown as string);
		formData.set(
			"description",
			normalizedData.description as unknown as string,
		);
		formData.set("published", normalizedData.published as unknown as string);
		formData.set("is_active", normalizedData.is_active ? "1" : "0");
		formData.set(
			"association_id",
			normalizedData.association_id as unknown as string,
		);

		const process = dataToUpdate
			? await new ActionApiService().update(
					formData,
					new SecurityService().getToken() as string,
				)
			: await new ActionApiService().insert(
					formData,
					new SecurityService().getToken() as string,
				);

		if ([200, 201].includes(process.status)) {
			navigate("/admin/action-homepage", {
				state: {
					message: dataToUpdate
						? "L'action a bien été modifiée."
						: "L'action a bien été ajoutée.",
				},
			});
		} else if ([400].includes(process.status)) {
			setMessage(process.data as unknown as string);
		}
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.card}>
				<h1 className={styles.title}>
					{dataToUpdate ? "Modifier une action" : "Ajouter une action"}
				</h1>

				<form
					className={styles.form}
					encType="multipart/form-data"
					onSubmit={handleSubmit(submitForm)}
				>
					<div className={styles.field}>
						<label htmlFor={nameId}>Nom</label>
						<input
							type="text"
							id={nameId}
							{...register("name", {
								required: "Le nom est obligatoire",
								minLength: {
									value: 2,
									message: "Un nom doit comporter, au minimum, 2 caractères",
								},
								maxLength: {
									value: 50,
									message: "Un nom doit comporter, au maximum, 50 caractères",
								},
							})}
						/>
						<small role="alert">
							{errors.name?.message ?? serverErrors?.name}
						</small>
					</div>

					<div className={styles.field}>
						<label htmlFor={imageId}>Image</label>
						<input
							type="file"
							id={imageId}
							{...register(
								"image",
								dataToUpdate
									? {}
									: {
											required: "L'image est obligatoire",
										},
							)}
						/>
						<small role="alert">
							{errors.image?.message ?? serverErrors?.image}
						</small>
					</div>

					<div className={styles.field}>
						<label htmlFor={descriptionId}>Description</label>
						<textarea
							id={descriptionId}
							rows={6}
							{...register("description", {
								required: "La description est obligatoire",
								minLength: {
									value: 20,
									message:
										"La description doit comporter, au minimum, 20 caractères",
								},
								maxLength: {
									value: 300,
									message:
										"La description doit comporter, au maximum, 300 caractères",
								},
							})}
						/>
						<small role="alert">
							{errors.description?.message ?? serverErrors?.description}
						</small>
					</div>

					<div className={styles.field}>
						<label htmlFor={publishedId}>Date de publication</label>
						<input
							type="date"
							id={publishedId}
							{...register(
								"published",
								dataToUpdate
									? {}
									: {
											required: "La date de publication est obligatoire",
										},
							)}
						/>
						<small role="alert">
							{errors.published?.message ?? serverErrors?.published?.toString()}
						</small>
					</div>

					<div className={styles.field}>
						<label htmlFor={associationId}>Association</label>
						<select
							id={associationId}
							{...register("association_id", {
								required: "L'association est obligatoire",
								valueAsNumber: true,
								min: {
									value: 1,
									message: "Veuillez sélectionner une association",
								},
							})}
						>
							<option value="">Sélectionner une association</option>
							{association.map((item) => {
								return (
									<option key={item.id} value={item.id}>
										{item.name}
									</option>
								);
							})}
						</select>
						<small role="alert">{errors.association_id?.message}</small>
					</div>

					<div className={styles.checkboxRow}>
						<label htmlFor={isactiveId}>En ligne</label>
						<input type="checkbox" id={isactiveId} {...register("is_active")} />
					</div>

					<input type="hidden" id={idId} {...register("id")} />

					<button className={styles.submitButton} type="submit">
						Soumettre
					</button>

					{message && <p className={styles.message}>{message}</p>}
				</form>
			</div>
		</section>
	);
};

export default AdminActionsFormContent;
