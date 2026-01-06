import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
	return (
		<form className={styles.form}>
			<h2>Contact</h2>

			<label htmlFor="name">Nom :</label>
			<input type="text" id="name" name="name" placeholder="Ton nom" />

			<label htmlFor="email">Email :</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="exemple@mail.com"
			/>

			<label htmlFor="message">Message :</label>
			<textarea
				id="message"
				name="message"
				placeholder="Votre message"
				rows={5}
			/>

			<button type="submit">Envoyer</button>
		</form>
	);
};

export default ContactPage;
