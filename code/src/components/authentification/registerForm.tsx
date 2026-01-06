// import styles from "./Form.module.css";

const RegisterForm = () => {
	return (
		<form className="">
			<h2>Créer un compte</h2>
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

			<label htmlFor="confirmPassword">Confirmer mot de passe :</label>
			<input
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				placeholder="••••••••"
			/>

			<button type="submit">Créer mon compte</button>
		</form>
	);
};

export default RegisterForm;
