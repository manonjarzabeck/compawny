"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { Association } from "../../../../models/association";
import type { AdminAssociationsFormContentProps } from "../../../models/props/admin/admin_associations_form_content_props";
import AssociationApiService from "../../../services/association_api_service";
import SecurityService from "../../../services/security_service";
import BackBtn from "../../btn/backBtn";
import styles from "./admin_form_content.module.css";

const AdminAssociationsFormContent = ({
	country,
	department,
	validator,
	dataToUpdate,
}: AdminAssociationsFormContentProps) => {
	// créer des indentifiants pour les champs de formulaire
	const nameId = useId();
	const descriptionId = useId();
	const introductionId = useId();
	const idId = useId();
	const countryId = useId();
	const departmentId = useId();
	const imageId = useId();
	const websiteId = useId();
	const addressId = useId();
	const emailId = useId();
	const isInternationalId = useId();
	const latitudeId = useId();
	const longitudeId = useId();

	// react hook form
	// register :
	// - remplace l'attribut name
	// - permet de référencer un champ de saisie lors de la souission du formulaire
	//  handleSubmit : permet de gérer la soumission du formulaire
	// reset : permet de pré-remplir le formulaire avec des données
	// errors : récupérer les erreurs de saisie selon les contraintes de validation définies

	// stocker les messages d'erreur de validation côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Association>>();

	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		formState: { errors },
	} = useForm<Partial<Association>>();

	// préremplir le formulaire avant l'affichage du composant
	useEffect(() => {
		// si des données sont à méttre à jour
		if (dataToUpdate) {
			// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données marchent

			const normalizedData = { ...dataToUpdate };
			reset(normalizedData);
		}
	}, [dataToUpdate, reset]);

	// désactiver les départements pour pays autre que la France
	const selectedCountry = watch("country_id");

	useEffect(() => {
		if (selectedCountry !== 1) {
			setValue("department_id", undefined);
		}
	}, [selectedCountry, setValue]);

	// message lié à la soumission du formulaire
	const [message, setMessage] = useState<string>("");

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// soumission du formulaire
	// data stocke la saisie du formulaire
	const submitForm = async (data: Partial<Association>) => {
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
			"introduction",
			normalizedData.introduction as unknown as string,
		);
		formData.set(
			"description",
			normalizedData.description as unknown as string,
		);
		formData.set("website", normalizedData.website as unknown as string);
		formData.set("address", normalizedData.address as unknown as string);
		formData.set("email", normalizedData.email as unknown as string);
		formData.set("latitude", normalizedData.latitude as unknown as string);
		formData.set("longitude", normalizedData.longitude as unknown as string);
		formData.set(
			"is_international",
			normalizedData.is_international ? "1" : "0",
		);
		formData.set("country_id", normalizedData.country_id as unknown as string);
		formData.set(
			"department_id",
			normalizedData.department_id as unknown as string,
		);

		// requête HTTP vers l'API
		const process = dataToUpdate
			? await new AssociationApiService().update(
					formData,
					new SecurityService().getToken() as string,
				)
			: await new AssociationApiService().insert(
					formData,
					new SecurityService().getToken() as string,
				);

		// si la requête HTTP a réussie
		if ([200, 201].includes(process.status)) {
			navigate("/admin/association-homepage", {
				state: {
					message: dataToUpdate
						? "L'association a bien été modifiée."
						: "L'association a bien été ajoutée.",
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
			<BackBtn fallbackLink="/admin/association-homepage" />
			<section className={styles.wrapper}>
				<div className={styles.card}>
					<h1 className={styles.title}>
						{dataToUpdate
							? "Modifier une association"
							: "Ajouter une association"}
					</h1>
					<form
						className={styles.form}
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
							<label htmlFor={introductionId}>Introduction :</label>
							<textarea
								id={introductionId}
								{...register("introduction", {
									maxLength: {
										value: 200,
										message:
											"L'introduction doit comporter, au maximum, 200 caractères",
									},
								})}
							/>
							<small role="alert">
								{errors.introduction?.message ?? serverErrors?.introduction}
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
							<label htmlFor={addressId}>Adresse :</label>
							<input
								type="text"
								id={addressId}
								{...register("address", {
									required: "L'adresse est obligatoire",
									minLength: {
										value: 20,
										message:
											"L'adresse doit comporter, au minimum, 20 caractères",
									},
									maxLength: {
										value: 150,
										message:
											"L'adresse doit comporter, au maximum, 150 caractères",
									},
								})}
							/>
							{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
							<small role="alert">
								{" "}
								{errors.address?.message ?? serverErrors?.address}
							</small>
						</div>

						<div className={styles.field}>
							<label htmlFor={emailId}>Email :</label>
							<input
								type="text"
								id={emailId}
								{...register("email", {
									required: "L'email est obligatoire",
									minLength: {
										value: 20,
										message:
											"L'email doit comporter, au minimum, 20 caractères",
									},
									maxLength: {
										value: 150,
										message:
											"L'email doit comporter, au maximum, 150 caractères",
									},
								})}
							/>
							{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
							<small role="alert">
								{" "}
								{errors.email?.message ?? serverErrors?.email}
							</small>
						</div>

						<div className={styles.field}>
							<label htmlFor={websiteId}>Site Web :</label>
							<input
								type="text"
								id={websiteId}
								{...register("website", {
									required: "Le site web est obligatoire",
									minLength: {
										value: 15,
										message:
											"Le site web doit comporter, au minimum, 15 caractères",
									},
									maxLength: {
										value: 100,
										message:
											"Le site web doit comporter, au maximum, 100 caractères",
									},
								})}
							/>
							{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
							<small role="alert">
								{" "}
								{errors.website?.message ?? serverErrors?.website}
							</small>
						</div>

						<div className={styles.field}>
							<label htmlFor={latitudeId}>Latitude :</label>
							<input
								type="text"
								id={latitudeId}
								{...register("latitude", {
									required: "La latitude est obligatoire",
									minLength: {
										value: 5,
										message:
											"La latitude doit comporter, au minimum, 5 caractères",
									},
									maxLength: {
										value: 50,
										message:
											"La longitude doit comporter, au maximum, 50 caractères",
									},
								})}
							/>
							{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
							<small role="alert">
								{" "}
								{errors.latitude?.message ?? serverErrors?.latitude}
							</small>
						</div>

						<div className={styles.field}>
							<label htmlFor={longitudeId}>Longitude :</label>
							<input
								type="text"
								id={longitudeId}
								{...register("longitude", {
									required: "La longitude est obligatoire",
									minLength: {
										value: 5,
										message:
											"La longitude doit comporter, au minimum, 5 caractères",
									},
									maxLength: {
										value: 50,
										message:
											"La longitude doit comporter, au maximum, 50 caractères",
									},
								})}
							/>
							{/* Afficher les messages d'erreur : utiliser le name du champ, définit dans register */}
							<small role="alert">
								{" "}
								{errors.longitude?.message ?? serverErrors?.longitude}
							</small>
						</div>

						<div className={styles.field}>
							<label htmlFor={countryId}>Pays :</label>
							<select
								{...register("country_id", {
									required: "Le pays est obligatoire",
									valueAsNumber: true,
									min: {
										value: 1,
										message: "Veuillez sélectionner un pays",
									},
								})}
							>
								<option value="">Sélectionner un pays</option>
								{country.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									);
								})}
							</select>
							<small role="alert"> {errors.country_id?.message}</small>
						</div>
						<div className={styles.field}>
							<label htmlFor={departmentId}>Département :</label>
							<select
								disabled={selectedCountry !== 64} // 64 = ID de la France
								{...register("department_id")}
							>
								<option value="">Sélectionner un département</option>
								{department.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className={styles.checkboxRow}>
							<label htmlFor={isInternationalId}>
								{" "}
								Association internationale :
							</label>
							<input
								type="checkbox"
								id={isInternationalId}
								{...register("is_international")}
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

export default AdminAssociationsFormContent;
