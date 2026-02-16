"use client";

import React, { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { Action } from "../../../../models/action";
import type { AdminActionsFormContentProps } from "../../../models/props/admin/admin_actions_form_content_props";
import ActionApiService from "../../../services/action_api_service";

const AdminActionsFormContent = ({
	association,
	validator,
	dataToUpdate,
}: AdminActionsFormContentProps) => {
	// créer des indentifiants pour les champs de formulaire
	const nameId = useId();
	const descriptionId = useId();
	const isactiveId = useId();
	const idId = useId();
	const associationId = useId();
	const imageId = useId();
	const publishedId = useId();

	// stocker les messages d'erreur de validation côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Action>>();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Action>>();

	// préremplir le formulaire avant l'affichage du composant
	useEffect(() => {
		// si des données sont à méttre à jour
		if (dataToUpdate) {
			// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données marchent

			const normalizedData = { ...dataToUpdate };
			reset(normalizedData);
		}
	}, [dataToUpdate, reset]);

	// message lié à la soumission du formulaire
	const [message, setMessage] = useState<string>("");

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// soumission du formulaire
	// data stocke la saisie du formulaire
	const submitForm = async (data: Partial<Action>) => {
		// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données marchent
		const normalizedData = { ...data, image: (data.image as string)[0] };

		// validation de la saisie avec validateur côté serveur
		const validation = await validator(normalizedData);

		// si la validation échoue
		if (validation instanceof Error) {
			// stocker les messages d'erreur
			let errors = {};

			//récupérer les messages d'erreur
			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				errors = { ...errors, [item.path.shift() as string]: item.message };
				return errors;
			});

			// définir l'état affichant les messages d'erreur côté serveur
			setServerErrors(errors);

			return;
		}

		// si la validation réussie
		// si le formulaire contient un champ de fichier : envoyer vers l'API un objet de type formData
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

		// requête HTTP vers l'API
		const process = dataToUpdate
			? await new ActionApiService().update(formData)
			: await new ActionApiService().insert(formData);

		// si la requête HTTP a réussie
		if ([200, 201].indexOf(process.status) !== -1) {
			// redirection
			navigate("/admin");
		}

		// si la requête HTTP échoue
		else if ([400].indexOf(process.status) !== -1) {
			// afficher un message
			setMessage(process.data as unknown as string);
		}
	};

	return (
		<>
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
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{" "}
						{errors.name?.message ?? serverErrors?.name}
					</small>
				</p>
				<p>
					<label htmlFor={imageId}>Image :</label>
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
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{" "}
						{errors.image?.message ?? serverErrors?.image}
					</small>
				</p>
				<p>
					<label htmlFor={descriptionId}>Description :</label>
					<textarea
						id={descriptionId}
						{...register("description", {
							required: "La description est obligatoire",
							minLength: {
								value: 2,
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
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{" "}
						{errors.description?.message ?? serverErrors?.description}
					</small>
				</p>
				<p>
					<label htmlFor={publishedId}>Date de publication :</label>
					<input
						type="date"
						id={publishedId}
						{...register("published", {
							required: "La date de publication est obligatoire",
						})}
					/>
					{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
					<small role="alert">
						{" "}
						{errors.published?.message ?? serverErrors?.published?.toString()}
					</small>
				</p>

				<div>
					<label htmlFor={associationId}>Association :</label>
					<select
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
					<small role="alert"> {errors.association_id?.message}</small>
				</div>
				<p>
					<label htmlFor={isactiveId}>En ligne :</label>
					<input type="checkbox" id={isactiveId} {...register("is_active")} />
				</p>
				<p>
					<input type="hidden" id={idId} {...register("id")} />
					<button type="submit">Soumettre</button>
				</p>
			</form>
		</>
	);
};

export default AdminActionsFormContent;
