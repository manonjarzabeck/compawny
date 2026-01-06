import React from "react";

// import styles from "./Form.module.css"; // ton CSS module si tu veux

const LoginForm = () => {
	return (
		<form className="">
			<h2>Connexion</h2>
			<label htmlFor="email">Email :</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="exemple@mail.com"
			/>

			<label htmlFor="password">Mot de passe :</label>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="••••••••"
			/>

			<button type="submit">Se connecter</button>
		</form>
	);
};

export default LoginForm;
