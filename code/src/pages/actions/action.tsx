import { use } from "react";
import ActionList from "../../components/action/action_list";
import Seo from "../../components/seo/seo";

const ListeActionsPage = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/

	return (
		<>
			<Seo
				title="Actions bénévoles"
				description="Les actions de bénévolat autour de chez vous"
				url=""
			/>
			<ActionList />
		</>
	);
};

export default ListeActionsPage;
