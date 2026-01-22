import { Outlet } from "react-router";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./public_layout.module.css";

const PublicLayout = () => {
	return (
		<div className={styles.layout}>
			{/*  uniquement des composants */}
			{/* lien d'évitement */}
			{/* header */}
			<Header />
			<main className={styles.content}>
				{/* contenu de la page enfant */}
				<Outlet />
			</main>
			<Footer />
			{/* footer */}
		</div>
	);
};

export default PublicLayout;
