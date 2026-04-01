"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { User } from "../../../models/user";
import SecurityApiService from "../../services/security_api_service";
import SecurityService from "../../services/security_service";
import styles from "./auth-form.module.css";

const LoginForm = () => {
	const emailId = useId();
	const passwordId = useId();

	const navigate = useNavigate();

	const [message, setMessage] = useState<string>("");

	const [serverErrors, setServerErrors] = useState<Partial<User>>({});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<User>>();

	const submitForm = async (data: Partial<User>) => {
		setServerErrors({});

		const process = await new SecurityApiService().login(data);

		if ([200, 201].includes(process.status)) {
			// récupérer l'utilisateur
			const user = process.data as User;

			// stocker l'utilisateur
			new SecurityService().setUser(user);

			// stocker le token JWT
			await new SecurityService().setToken(user);

			// redirection vers une route react selon le rôle de l'utilisateur
			if (user.role.name === "admin") {
				navigate("/admin");
				return;
			}

			navigate("/espace-utilisateur");
		} else if ([400, 401, 403].includes(process.status)) {
			setMessage("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	return (
		<form className={styles.formCard} onSubmit={handleSubmit(submitForm)}>
			<h2 className={styles.title}>Connexion</h2>

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
				Se connecter
			</button>
		</form>
	);
};

export default LoginForm;
