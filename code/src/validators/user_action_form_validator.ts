import z, { type ZodError } from "zod";
import type { Action } from "../../models/action";

class UserActionFormValidator {
	public validate = async (
		data: Partial<Action>,
	): Promise<Partial<Action> | ZodError> => {
		"use server";

		const constraints = z.object({
			name: z
				.string("Le nom est obligatoire")
				.min(2, "Un nom doit comporter, au minimum, 2 caractères")
				.max(50, "Un nom doit comporter, au maximum, 50 caractères"),

			description: z
				.string("La description est obligatoire")
				.min(20, "La description doit comporter, au minimum, 20 caractères")
				.max(300, "La description doit comporter, au maximum, 300 caractères"),

			association_proposal: z
				.string("Le nom de l'association est obligatoire")
				.min(
					5,
					"Le nom de l'association doit comporter au minimum 5 caractères",
				)
				.max(
					100,
					"Le nom de l'association doit comporter au maximum 100 caractères",
				),
		});

		const validation = await constraints.safeParseAsync(data);

		if (!validation.success) {
			return validation.error;
		}

		return validation.data as Partial<Action>;
	};
}

export default UserActionFormValidator;
