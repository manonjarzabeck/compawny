import z, { promise, type ZodError } from "zod";
import type { Association } from "../../../models/association";

class AdminAssociationFormValidator {
	// VALIDATION DES DONNÉES DU FORMULAIRE
	public validate = async (
		data: Partial<Association>,
	): Promise<Partial<Association> | ZodError> => {
		// la méthode doit être executée côté serveur
		"use server";
		// contraintes de validations
		// reprendre strictement les propriétés du type à valider
		const constraints = z.object({
			id: z.union([
				z.string().nullable(),
				// coerce : transtyper
				z.coerce
					.number()
					.positive(),
			]),
			name: z
				.string("Le nom est obligatoire")
				.min(2, "Un nom doit comporter, au minimum, 2 caractères")
				.max(50, "Un nom doit comporter, au maximum, 50 caractères"),
			image: z.union([
				z.string().nullable(),
				// contrainte obligatoire
				z.file("L'image est obligatoire"),
			]),
			description: z
				.string("La description est obligatoire")
				.min(20, "La description doit comporter, au minimum, 20 caractères")
				.max(300, "La description doit comporter, au maximum, 300 caractères"),
			website: z
				.string("Le site web est obligatoire")
				.min(15, "Le site web doit comporter, au minimum, 15 caractères")
				.max(100, "Le site web doit comporter, au maximum, 100 caractères"),
			address: z
				.string("L'adresse est obligatoire")
				.min(20, "L'adresse doit comporter, au minimum, 20 caractères")
				.max(150, "L'adresse doit comporter, au maximum, 150 caractères"),
			email: z
				.string("L'email est obligatoire")
				.min(20, "L'email doit comporter, au minimum, 20 caractères")
				.max(150, "L'email doit comporter, au maximum, 150 caractères"),
			latitude: z.coerce
				.number("La latitude est obligatoire"),
			longitude: z.coerce
				.number("La longitude est obligatoire"),
			country_id: z.coerce.number().min(1, "Veuillez sélectionner un pays"),
		});

		// validation de la saisie du formulaire
		const validation = await constraints.safeParseAsync(data);

		// si la validation échoue
		if (!validation.success) {
			return validation.error;
		}

		// si la validation réussi
		return validation.data as Partial<Association>;
	};
}

export default AdminAssociationFormValidator;
