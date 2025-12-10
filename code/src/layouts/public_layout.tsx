import { Outlet } from "react-router";
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

			{/* footer */}
		</>
	);
};

export default PublicLayout;
