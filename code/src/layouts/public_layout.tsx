import { Outlet } from "react-router";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header/header";
import ScrollToTop from "../components/scrollToTop/scrollToTop";
import styles from "./public_layout.module.css";

const PublicLayout = () => {
	return (
		<div className={styles.layout}>
			{/*  uniquement des composants */}
			{/* lien d'évitement */}
			{/* header */}
			<Header />
			<main className={styles.content}>
				<ScrollToTop />
				{/* contenu de la page enfant */}
				<Outlet />
			</main>
			{/* footer */}
			<Footer />
		</div>
	);
};

export default PublicLayout;
