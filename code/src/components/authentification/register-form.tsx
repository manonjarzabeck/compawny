"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import type { User } from "../../../models/user";
import SecurityApiService from "../../services/security_api_service";
import styles from "./auth-form.module.css";

const RegisterForm = () => {
	const emailId = useId();
	const passwordId = useId();

	const [message, setMessage] = useState<string>("");

	const [serverErrors, setServerErrors] = useState<Partial<User>>({});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<User>>();

	const submitForm = async (data: Partial<User>) => {
		setServerErrors({});

		const process = await new SecurityApiService().register(data);

		if ([200, 201].includes(process.status)) {
			setMessage("Votre compte à bien été créé !");
			reset();
		} else if ([400].includes(process.status)) {
			setMessage("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	return (
		<form className={styles.formCard} onSubmit={handleSubmit(submitForm)}>
			<h2 className={styles.title}>Créer un compte</h2>

			{message && <p className={styles.message}>{message}</p>}

			<div className={styles.formGroup}>
				<label htmlFor={emailId}>Email</label>
				<input
					type="email"
					id={emailId}
					{...register("email", {
						required: "L’email est requis.",
					})}
					placeholder="exemple@mail.com"
				/>
				{errors.email && (
					<span className={styles.errorMessage}>{errors.email.message}</span>
				)}
				{serverErrors.email && (
					<span className={styles.errorMessage}>{serverErrors.email}</span>
				)}
			</div>

			<div className={styles.formGroup}>
				<label htmlFor={passwordId}>Mot de passe</label>
				<input
					type="password"
					id={passwordId}
					{...register("password", {
						required: "Le mot de passe est requis.",
					})}
					placeholder="••••••••"
				/>
				{errors.password && (
					<span className={styles.errorMessage}>{errors.password.message}</span>
				)}
				{serverErrors.password && (
					<span className={styles.errorMessage}>{serverErrors.password}</span>
				)}
			</div>

			<button type="submit" className={styles.primaryButton}>
				Créer mon compte
			</button>
		</form>
	);
};

export default RegisterForm;
