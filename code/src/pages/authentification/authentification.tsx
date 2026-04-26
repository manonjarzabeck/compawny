"use client";

import styles from "../../components/authentification/auth-form.module.css";
import LoginForm from "../../components/authentification/login-form";
import RegisterForm from "../../components/authentification/register-form";
import Btn from "../../components/btn/Btn";
import FlashMessage from "../../components/flash-msg/flash-msg";
import Seo from "../../components/seo/seo";
import AuthLogFormValidator from "../../validators/auth_log_form_validator";

const AuthentificationPage = () => {
	// Validateur partagé entre le formulaire de connexion et d’inscription
	const validator = new AuthLogFormValidator().validate;

	return (
		<>
			<Seo
				title="Authentification"
				description="Interface d'authentification"
				url="/authentification"
			/>

			{/* Bouton de retour vers l'accueil */}
			<div className={styles.backBtnWrapper}>
				<Btn link="/">Retour à l'accueil</Btn>
			</div>

			<section className={styles.authSection}>
				<div className={styles.authIntro}>
					<h1>Mon espace personnel 👤</h1>
					<p>
						Connectez-vous ou créez un compte pour enregistrer vos actions
						favorites et accéder à votre espace personnel.
					</p>
				</div>

				{/* 
				Message flash générique :
				affiché après certaines redirections
				exemple : déconnexion réussie
				*/}
				<FlashMessage />

				{/* Texte d'introduction de la page */}
				{/* Bloc contenant les deux formulaires */}
				<div className={styles.formsWrapper}>
					<LoginForm validator={validator} />
					<RegisterForm validator={validator} />
				</div>
			</section>
		</>
	);
};

export default AuthentificationPage;
