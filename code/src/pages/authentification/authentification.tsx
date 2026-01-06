import LoginForm from "../../components/authentification/loginForm";
import RegisterForm from "../../components/authentification/registerForm";
import Seo from "../../components/seo/seo";
import styles from "./authentification.module.css";

const AuthentificationPage = () => {
	return (
		<>
			<Seo
				title="Authentification"
				description="Interface d'authentification"
				url=""
			/>
			<section className={styles.authPage}>
				<div>Authentification - Connexion/Création de compte</div>
				<LoginForm />
				<RegisterForm />
			</section>
		</>
	);
};

export default AuthentificationPage;
