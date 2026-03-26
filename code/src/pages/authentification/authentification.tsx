import styles from "../../assets/css/auth-form.module.css";
import LoginForm from "../../components/authentification/login-form";
import RegisterForm from "../../components/authentification/register-form";
import Seo from "../../components/seo/seo";

const AuthentificationPage = () => {
	return (
		<>
			<Seo
				title="Authentification"
				description="Interface d'authentification"
				url=""
			/>
			<section className={styles.authSection}>
				<div className={styles.authIntro}>
					<h1>Mon espace</h1>
					<p>
						Connectez-vous ou créez un compte pour enregistrer vos actions
						favorites et accéder à votre espace personnel.
					</p>
				</div>

				<div className={styles.formsWrapper}>
					<LoginForm />
					<RegisterForm />
				</div>
			</section>
		</>
	);
};

export default AuthentificationPage;
