import z, { type ZodError } from "zod";
import type { Contact } from "../../models/contact";

class ContactFormValidator {
	public validate = async (
		data: Partial<Contact>,
	): Promise<Partial<Contact> | ZodError> => {
		"use server";

		const constraints = z.object({
			name: z
				.string("Le prénom est requis")
				.min(2, "Le prénom doit comporter au minimum 2 caractères")
				.max(50, "Le prénom doit comporter au maximum 50 caractères"),

			email: z
				.string("L’email est requis")
				.pipe(z.email("Veuillez saisir une adresse email valide")),

			message: z
				.string("Le message est requis")
				.min(10, "Le message doit comporter au minimum 10 caractères")
				.max(1000, "Le message doit comporter au maximum 1000 caractères"),
		});

		const validation = await constraints.safeParseAsync(data);

		if (!validation.success) {
			return validation.error;
		}

		return validation.data as Partial<Contact>;
	};
}

export default ContactFormValidator;
