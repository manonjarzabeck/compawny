import { Outlet, ScrollRestoration } from "react-router";
import styles from "../assets/css/layout.module.css";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header/header";

// import ScrollToTop from "../components/scrollToTop/scrollToTop";

const PublicLayout = () => {
	return (
		<div className={styles.page}>
			{/*  uniquement des composants */}

			{/* lien d'évitement */}
			<a href="#main-content" className={styles.skipLink}>
				Aller au contenu principal
			</a>

			{/* 
			ScrollRestoration (React Router)
			Permet de restaurer automatiquement la position du scroll lors des changements de page.
			Ici utilisé pour repositionner l’utilisateur en haut de la page à chaque navigation.
			*/}
			<ScrollRestoration />

			{/* header */}
			<Header />

			<main id="main-content" className={styles.main}>
				{/* contenu de la page enfant */}
				<Outlet />
			</main>

			{/* footer */}
			<Footer />
		</div>
	);
};

export default PublicLayout;
