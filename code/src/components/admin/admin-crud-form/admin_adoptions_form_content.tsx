"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { Animal } from "../../../../models/animal";
import styles from "../../../assets/css/admin_form_content.module.css";
import type { AdminAdoptionsFormContentProps } from "../../../models/props/admin/admin_adoptions_form_content_props";
import AdoptionApiService from "../../../services/adoption_api_service";

const AdminAdoptionsFormContent = ({
	association,
	species,
	validator,
	dataToUpdate,
}: AdminAdoptionsFormContentProps) => {
	// créer des indentifiants pour les champs de formulaire
	const idId = useId();
	const nameId = useId();
	const imageId = useId();
	const arrivalId = useId();
	const descriptionId = useId();
	const is_adoptableId = useId();
	const associationId = useId();
	const speciesId = useId();

	// stocker les messages d'erreur de validation côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Animal>>();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Animal>>();

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
	const submitForm = async (data: Partial<Animal>) => {
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
		formData.set("arrival", normalizedData.arrival as unknown as string);
		formData.set("is_adoptable", normalizedData.is_adoptable ? "1" : "0");
		formData.set(
			"association_id",
			normalizedData.association_id as unknown as string,
		);
		formData.set("species_id", normalizedData.species_id as unknown as string);

		// requête HTTP vers l'API
		const process = dataToUpdate
			? await new AdoptionApiService().update(formData)
			: await new AdoptionApiService().insert(formData);

		// si la requête HTTP a réussie
		if ([200, 201].includes(process.status)) {
			navigate("/admin/adoption-homepage", {
				state: {
					message: dataToUpdate
						? "L'adoption SOS a bien été modifiée."
						: "L'adoption SOS a bien été ajoutée.",
				},
			});
		} else if ([400].includes(process.status)) {
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
			<section className={styles.wrapper}>
				<div className={styles.card}>
					<h1 className={styles.title}>
						{dataToUpdate
							? "Modifier une adoption SOS"
							: "Ajouter une adoption SOS"}
					</h1>
					<form
						encType="multipart/form-data"
						onSubmit={handleSubmit(submitForm)}
					>
						<div className={styles.field}>
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
						</div>
						<div className={styles.field}>
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
						</div>

						<div className={styles.field}>
							<label htmlFor={arrivalId}>Date d'entrée au refuge :</label>
							<input
								type="date"
								id={arrivalId}
								{...register("arrival", {
									required: "La date d'entrée au refuge est obligatoire",
								})}
							/>
							{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
							<small role="alert">
								{" "}
								{errors.arrival?.message ?? serverErrors?.arrival?.toString()}
							</small>
						</div>
						<div className={styles.field}>
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
						</div>
						<div className={styles.field}>
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
						<div className={styles.field}>
							<label htmlFor={speciesId}>Espèce :</label>
							<select
								{...register("species_id", {
									required: "L'espèce est obligatoire",
									valueAsNumber: true,
									min: {
										value: 1,
										message: "Veuillez sélectionner une espèce",
									},
								})}
							>
								<option value="">Sélectionner une espèce</option>
								{species.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									);
								})}
							</select>
							<small role="alert"> {errors.species_id?.message}</small>
						</div>
						<div className={styles.checkboxRow}>
							<label htmlFor={is_adoptableId}>À l'adoption :</label>
							<input
								type="checkbox"
								id={is_adoptableId}
								{...register("is_adoptable")}
							/>
						</div>

						<input type="hidden" {...register("id")} id={idId} />
						<button className={styles.submitButton} type="submit">
							Soumettre
						</button>

						{message && <p className={styles.message}>{message}</p>}
					</form>
				</div>
			</section>
		</>
	);
};

export default AdminAdoptionsFormContent;
