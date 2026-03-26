import React from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
	return (
		<form className={styles.form}>
			<label htmlFor="name">Nom</label>
			<input type="text" id="name" name="name" placeholder="Votre prénom" />

			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="exemple@email.com"
			/>

			<label htmlFor="message">Votre expérience</label>
			<textarea
				id="message"
				name="message"
				placeholder="Racontez-nous votre expérience avec Compawny 🤎"
				rows={5}
			/>

			<button type="submit">Envoyer mon témoignage 🫶🏼</button>
		</form>
	);
};

export default ContactForm;
