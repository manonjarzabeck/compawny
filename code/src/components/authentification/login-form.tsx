"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { User } from "../../../models/user";
import type { AuthLogFormProps } from "../../models/props/auth_log_form_props";
import SecurityApiService from "../../services/security_api_service";
import SecurityService from "../../services/security_service";
import styles from "./auth-form.module.css";

const LoginForm = ({ validator }: AuthLogFormProps) => {
	// Génère des identifiants uniques pour l’accessibilité des champs
	const emailId = useId();
	const passwordId = useId();

	// Permet de rediriger l’utilisateur après connexion
	const navigate = useNavigate();

	// Gère les messages globaux affichés dans le formulaire
	const [message, setMessage] = useState<string>("");

	// Stocke les erreurs renvoyées par la validation complémentaire
	const [serverErrors, setServerErrors] = useState<Partial<User>>({});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Partial<User>>();

	// Envoi du formulaire de connexion
	const submitForm = async (data: Partial<User>) => {
		setMessage("");
		setServerErrors({});

		// Validation complémentaire des données avant envoi
		const validation = await validator(data);

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

		// Envoi des identifiants à l’API de sécurité
		const process = await new SecurityApiService().login(validation);

		if ([200, 201].includes(process.status)) {
			// Récupération de l’utilisateur connecté
			const user = process.data as User;

			// Stockage de l’utilisateur en mémoire
			new SecurityService().setUser(user);

			// Génération / stockage du token JWT
			await new SecurityService().setToken(user);

			// Redirection selon le rôle
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
					placeholder="exemple@mail.com"
					{...register("email", {
						required: "L’email est requis.",
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: "Veuillez saisir une adresse email valide",
						},
					})}
				/>
				<span className={styles.errorMessage}>
					{errors.email?.message ?? serverErrors.email}
				</span>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor={passwordId}>Mot de passe</label>
				<input
					type="password"
					id={passwordId}
					placeholder="••••••••"
					{...register("password", {
						required: "Le mot de passe est requis.",
						minLength: {
							value: 8,
							message: "Minimum 8 caractères",
						},
						maxLength: {
							value: 100,
							message: "Maximum 100 caractères",
						},
					})}
				/>
				<span className={styles.errorMessage}>
					{errors.password?.message ?? serverErrors.password}
				</span>
			</div>

			<button
				type="submit"
				className={styles.primaryButton}
				disabled={isSubmitting}
			>
				{isSubmitting ? "Connexion..." : "Se connecter"}
			</button>
		</form>
	);
};

export default LoginForm;
