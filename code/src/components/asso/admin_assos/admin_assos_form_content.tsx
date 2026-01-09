"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import type { Asso } from "../../../../models/asso";
import type { AdminAssosFormContentProps } from "../../../models/props/admin/admin_assos_form_content_props";

const AdminAssosFormContent = ({ country }: AdminAssosFormContentProps) => {
	// créer des indentifiants pour les champs de formulaire
	const nameId = useId();
	const descriptionId = useId();
	const idId = useId();
	const countryId = useId();
	const imageId = useId();
	const sitewebId = useId();
	const addressId = useId();

	// react hook form
	// register :
	// - remplace l'attribut name
	// - permet de référencer un champ de saisie lors de la souission du formulaire
	//  handleSubmit : permet de gérer la soumission du formulaire
	// reset : permet de pré-remplir le formulaire avec des données
	// errors : récupérer les erreurs de saisie selon les contraintes de validation définies

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const submitForm = (data: Partial<Asso>) => {
		console.log(data);
	};

	return (
		<>
			<h2>Gérer les associations</h2>
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
					<input type="text" {...register("name")} id={nameId} />
				</p>
				<p>
					<label htmlFor={imageId}>Image :</label>
					<input type="text" {...register("picture")} id={imageId} />
				</p>
				<p>
					<label htmlFor={descriptionId}>Description :</label>
					<textarea {...register("description")} id={descriptionId} />
				</p>
				<p>
					<label htmlFor={sitewebId}>Site Web :</label>
					<textarea {...register("siteweb")} id={sitewebId} />
				</p>
				<p>
					<label htmlFor={addressId}>Adresse :</label>
					<textarea {...register("address")} id={addressId} />
				</p>
				<div>
					<label htmlFor={countryId}>Pays :</label>
					<select {...register("country_id")}>
						<option value="">Sélectionner un pays</option>
						{country.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>

				<p>
					<input type="hidden" {...register("id")} id={idId} />
					<button type="submit">Ajouter une action</button>
				</p>
			</form>
		</>
	);
};

export default AdminAssosFormContent;
