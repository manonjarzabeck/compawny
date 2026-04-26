import z, { type ZodError } from "zod";
import type { User } from "../../models/user";

class AuthLogFormValidator {
	public validate = async (
		data: Partial<User>,
	): Promise<Partial<User> | ZodError> => {
		"use server";

		const constraints = z.object({
			email: z
				.string("L’email est requis")
				.pipe(z.email("Veuillez saisir une adresse email valide")),

			password: z
				.string("Le mot de passe est requis")
				.min(8, "Le mot de passe doit comporter au minimum 8 caractères")
				.max(100, "Le mot de passe doit comporter au maximum 100 caractères"),
		});

		const validation = await constraints.safeParseAsync(data);

		if (!validation.success) {
			return validation.error;
		}

		return validation.data as Partial<User>;
	};
}

export default AuthLogFormValidator;
