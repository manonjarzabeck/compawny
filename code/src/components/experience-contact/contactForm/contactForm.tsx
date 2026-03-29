"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Contact } from "../../../../models/contact";
import ContactApiService from "../../../services/contact_api_service";
import styles from "./contactForm.module.css";

const ContactForm = () => {
	const [message, setMessage] = useState("");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<Partial<Contact>>();

	const submitForm = async (data: Partial<Contact>) => {
		setMessage("");

		try {
			const process = await new ContactApiService().insert(data);

			if ([200, 201].includes(process.status)) {
				setMessage("Merci pour votre témoignage 💛");
				reset();
			} else {
				setMessage("Une erreur est survenue, veuillez réessayer.");
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi du formulaire :", error);
			setMessage("Une erreur est survenue, veuillez réessayer.");
		}
	};

	return (
		<form onSubmit={handleSubmit(submitForm)} className={styles.form}>
			<label htmlFor="name">Nom</label>
			<input
				type="text"
				id="name"
				placeholder="Votre prénom"
				{...register("name", {
					required: "Le prénom est requis",
				})}
			/>
			{errors.name && <p className={styles.error}>{errors.name.message}</p>}

			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				placeholder="exemple@email.com"
				{...register("email", {
					required: "L’email est requis",
				})}
			/>
			{errors.email && <p className={styles.error}>{errors.email.message}</p>}

			<label htmlFor="message">Votre expérience</label>
			<textarea
				id="message"
				placeholder="Racontez-nous votre expérience avec Compawny 🤎"
				rows={5}
				{...register("message", {
					required: "Le témoignage est requis",
				})}
			/>
			{errors.message && (
				<p className={styles.error}>{errors.message.message}</p>
			)}

			<button type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Envoi..." : "Envoyer mon témoignage 🫶🏼"}
			</button>

			{message && <p className={styles.feedback}>{message}</p>}
		</form>
	);
};

export default ContactForm;
