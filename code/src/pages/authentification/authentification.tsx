import styles from "../../components/authentification/auth-form.module.css";
import LoginForm from "../../components/authentification/login-form";
import RegisterForm from "../../components/authentification/register-form";
import Btn from "../../components/btn/Btn";
import Seo from "../../components/seo/seo";

const AuthentificationPage = () => {
	return (
		<>
			<Seo
				title="Authentification"
				description="Interface d'authentification"
				url=""
			/>

			{/* Bouton de retour vers l'accueil */}
			<div className={styles.backBtnWrapper}>
				<Btn link="/">Retour à l'accueil</Btn>
			</div>

			<section className={styles.authSection}>
				{/* Texte d'introduction de la page */}
				<div className={styles.authIntro}>
					<h1>Mon espace personnel 👤</h1>
					<p>
						Connectez-vous ou créez un compte pour enregistrer vos actions
						favorites et accéder à votre espace personnel.
					</p>
				</div>

				{/* Bloc contenant les deux formulaires */}
				<div className={styles.formsWrapper}>
					<LoginForm />
					<RegisterForm />
				</div>
			</section>
		</>
	);
};

export default AuthentificationPage;
