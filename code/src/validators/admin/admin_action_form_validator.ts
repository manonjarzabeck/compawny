import z, { promise, type ZodError } from "zod";
import type { Action } from "../../../models/action";

class AdminActionFormValidator {
	// VALIDATION DES DONNÉES DU FORMULAIRE
	public validate = async (
		data: Partial<Action>,
	): Promise<Partial<Action> | ZodError> => {
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
			published: z.union([
				z.string().length(0),
				z.coerce
					.date()
					.max(
						new Date(),
						"La date de publication ne peut pas être dans le futur",
					),
			]),
			association_id: z.coerce
				.number()
				.min(1, "Veuillez sélectionner une association"),
		});

		// validation de la saisie du formulaire
		const validation = await constraints.safeParseAsync(data);

		// si la validation échoue
		if (!validation.success) {
			return validation.error;
		}

		// si la validation réussi
		return validation.data as unknown as Partial<Action>;
	};
}

export default AdminActionFormValidator;
