"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import type { Animal } from "../../../../models/animal";
import type { AdminAdoptionsFormContentProps } from "../../../models/props/admin/admin_adoptions_form_content_props";

const AdminAdoptionsFormContent = ({
	asso,
	species,
}: AdminAdoptionsFormContentProps) => {
	// créer des indentifiants pour les champs de formulaire
	const nameId = useId();
	const descriptionId = useId();
	const idId = useId();
	const countryId = useId();
	const speciesId = useId();
	const pictureId = useId();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const submitForm = (data: Partial<Animal>) => {
		console.log(data);
	};

	return (
		<>
			<h2>Gérer les adoptions</h2>
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
					<label htmlFor={pictureId}>Image :</label>
					<input type="text" {...register("picture")} id={pictureId} />
				</p>
				<p>
					<label htmlFor={descriptionId}>Description :</label>
					<textarea {...register("description")} id={descriptionId} />
				</p>
				<div>
					<label htmlFor={countryId}>Association :</label>
					<select {...register("country_id")}>
						<option value="">Sélectionner une association</option>
						{asso.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<label htmlFor={speciesId}>Espèce :</label>
					<select {...register("species_id")}>
						<option value="">Sélectionner une espèce</option>
						{species.map((item) => {
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

export default AdminAdoptionsFormContent;
