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
			<ScrollRestoration />

			{/* header */}
			<Header />
			<main className={styles.main}>
				{/* contenu de la page enfant */}
				<Outlet />
			</main>
			{/* footer */}
			<Footer />
		</div>
	);
};

export default PublicLayout;
