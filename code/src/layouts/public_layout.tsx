import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const PublicLayout = () => {
	return (
		<>
			{/*  uniquement des composants */}
			{/* lien d'évitement */}
			{/* header */}
			<Header />

			{/* contenu de la page enfant */}
			<Outlet />

			<Footer />
			{/* footer */}
		</>
	);
};

export default PublicLayout;
