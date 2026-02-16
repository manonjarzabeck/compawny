import z, { promise, type ZodError } from "zod";
import type { Animal } from "../../../models/animal";

class AdminAdoptionFormValidator {
	// VALIDATION DES DONNÉES DU FORMULAIRE
	public validate = async (
		data: Partial<Animal>,
	): Promise<Partial<Animal> | ZodError> => {
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
			arrival: z.coerce
				.date({ message: "La date d'arrivée est obligatoire" })
				.max(new Date(), "La date d'arrivée ne peut pas être dans le futur"),
			description: z
				.string("La description est obligatoire")
				.min(20, "La description doit comporter, au minimum, 20 caractères")
				.max(300, "La description doit comporter, au maximum, 300 caractères"),
			association_id: z.coerce
				.number()
				.min(1, "Veuillez sélectionner une association"),
			species_id: z.coerce.number().min(1, "Veuillez sélectionner une espèce"),
		});

		// validation de la saisie du formulaire
		const validation = await constraints.safeParseAsync(data);

		// si la validation échoue
		if (!validation.success) {
			return validation.error;
		}

		// si la validation réussi
		return validation.data as Partial<Animal>;
	};
}

export default AdminAdoptionFormValidator;
