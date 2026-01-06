import { use } from "react";
import type { Action } from "../../../models/action";
import ActionList from "../../components/action/action_list";
import Seo from "../../components/seo/seo";
import type { ApiResponse } from "../../models/api_response";
import ActionApiService from "../../services/action_api_service";

const ListeActionsPage = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/

	// const results = use<ApiResponse<Action[]>>(
	// 	new ActionApiService().selectAll(),
	// );

	// console.log(results);

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
