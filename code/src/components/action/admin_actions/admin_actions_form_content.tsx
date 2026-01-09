"use client";

import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod/v3";
import type { Action } from "../../../../models/action";
import type { AdminActionsFormContentProps } from "../../../models/props/admin/admin_actions_form_content_props";

const AdminActionsFormContent = ({
	asso,
	validator,
}: AdminActionsFormContentProps) => {
	// créer des indentifiants pour les champs de formulaire
	const nameId = useId();
	const descriptionId = useId();
	const isactiveId = useId();
	const idId = useId();
	const assoId = useId();
	const imageId = useId();

	// stocker les messages d'erreur de validation côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Action>>();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Action>>();

	// soumission du formulaire
	// data stocke la saisie du formulaire
	const submitForm = async (data: Partial<Action>) => {
		// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données
		// const normalizedData = { ...data };
		const validation = await validator(data);

		// si la validation échoue
		if (validation instanceof Error) {
			// stocker les messages d'erreur
			let errors = {};

			//récupérer les messages d'erreur
			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				errors = { ...errors, [item.path.shift() as string]: item.message };
				return errors;
			});

			// définir l'état
			setServerErrors(errors);

			return;
		}
	};

	return (
		<>
			<h2>Gérer les actions</h2>
			{/* 
	- si le formulaire contient un champ de fichier : ajouter l'attribut enctype="multipart/form-data"
	
	- pour les champs en relation : 
		FK : créer, soit une liste déroulante <select>, soit des boutons radios 
			> séléction  d'un seul choix 
		table de jointure : cases à cocher 
			> sélection de plusieurs choix 
		*/}
			<form encType="multipart/form-data" onSubmit={handleSubmit(submitForm)}>
				<p>
					<label htmlFor={nameId}>Nom :</label>
					<input
						type="text"
						id={nameId}
						{...register("name", {
							// required: "Le nom est obligatoire",
							// minLength: {
							// 	value: 2,
							// 	message: "Un nom doit comporter, au minimum, 2 caractères",
							// },
							// maxLength: {
							// 	value: 100,
							// 	message: "Un nom doit comporter, au maximum, 100 caractères",
							// },
						})}
					/>
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{" "}
						{errors.name?.message ?? serverErrors?.name}
					</small>
				</p>
				<p>
					<label htmlFor={imageId}>Image :</label>
					<input type="text" {...register("image")} id={imageId} />
				</p>
				<p>
					<label htmlFor={descriptionId}>Description :</label>
					<textarea {...register("description")} id={descriptionId} />
				</p>
				<p>
					<label htmlFor={isactiveId}>En ligne :</label>
					<input type="checkbox" {...register("is_active")} id={isactiveId} />
				</p>
				<div>
					<label htmlFor={assoId}>Asso</label>
					<select {...register("asso_id")}>
						<option value="">Sélectionner une association</option>
						{asso.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							);
						})}
						{/* pour les foreign key, les convertir en number ( ID ), mettre un minimum 1, et un message " la section est obligatoire, bla bla bla" */}
					</select>
				</div>

				<p>
					<input type="hidden" id={idId} {...register("id")} />
					<button type="submit">Ajouter une action</button>
				</p>
			</form>
		</>
	);
};

export default AdminActionsFormContent;
