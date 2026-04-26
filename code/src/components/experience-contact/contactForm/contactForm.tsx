"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod/v3";
import type { Contact } from "../../../../models/contact";
import type { ContactFormContentProps } from "../../../models/props/contact_form_content_props";
import ContactApiService from "../../../services/contact_api_service";
import styles from "./contactForm.module.css";

const ContactForm = ({ validator }: ContactFormContentProps) => {
	// Génère des identifiants uniques pour l’accessibilité des champs
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	// Gère les messages d’état du formulaire
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	// Stocke les erreurs de validation renvoyées côté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Contact>>({});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<Partial<Contact>>();

	const submitForm = async (data: Partial<Contact>) => {
		setMessage("");

		// On repart des données saisies dans le formulaire
		// (name, email, message)
		// puis on les prépare pour la validation et l’envoi.
		const normalizedData: Partial<Contact> = {
			...data,
		};

		// Validation complémentaire des données avant envoi
		const validation = await validator(normalizedData);

		if (validation instanceof Error) {
			let formErrors = {};

			// Transformation des erreurs de validation
			// en objet exploitable dans le formulaire
			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				formErrors = {
					...formErrors,
					[item.path.shift() as string]: item.message,
				};
				return formErrors;
			});

			setServerErrors(formErrors);
			return;
		}

		setServerErrors({});

		try {
			// Envoi du formulaire à l’API
			const process = await new ContactApiService().insert(validation);

			if ([200, 201].includes(process.status)) {
				setMessage("Votre message à bien été envoyé 🐾");
				setSubmitted(true);
				reset();
			} else {
				setMessage("Une erreur est survenue. Veuillez réessayer.");
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi du formulaire :", error);
			setMessage("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	// Affichage d’un message de confirmation après envoi réussi
	if (submitted) {
		return (
			<div className={styles.formCard}>
				<div className={styles.successBox}>
					<h2 className={styles.formTitle}>Merci beaucoup 🤎</h2>
					<p className={styles.successText}>{message}</p>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.formCard}>
			<form className={styles.form} onSubmit={handleSubmit(submitForm)}>
				<div className={styles.field}>
					<label htmlFor={nameId}>Prénom</label>
					<input
						type="text"
						id={nameId}
						placeholder="Votre prénom"
						{...register("name", {
							required: "Le prénom est requis",
							minLength: {
								value: 2,
								message: "Minimum 2 caractères",
							},
							maxLength: {
								value: 50,
								message: "Maximum 50 caractères",
							},
						})}
					/>
					<small>{errors.name?.message ?? serverErrors?.name}</small>
				</div>

				<div className={styles.field}>
					<label htmlFor={emailId}>Email</label>
					<input
						type="email"
						id={emailId}
						placeholder="exemple@email.com"
						{...register("email", {
							required: "L’email est requis",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Veuillez saisir une adresse email valide",
							},
						})}
					/>
					<small>{errors.email?.message ?? serverErrors?.email}</small>
				</div>

				<div className={styles.field}>
					<label htmlFor={messageId}>Votre message</label>
					<textarea
						id={messageId}
						rows={5}
						placeholder="Partagez votre expérience ou votre message…"
						{...register("message", {
							required: "Le message est requis",
							minLength: {
								value: 10,
								message: "Minimum 10 caractères",
							},
							maxLength: {
								value: 1000,
								message: "Maximum 1000 caractères",
							},
						})}
					/>
					<small>{errors.message?.message ?? serverErrors?.message}</small>
				</div>

				<button
					type="submit"
					className={styles.submitButton}
					disabled={isSubmitting}
				>
					{isSubmitting ? "Envoi..." : "Envoyer 🐾"}
				</button>

				{message && !submitted && (
					<p className={styles.feedbackMessage}>{message}</p>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
