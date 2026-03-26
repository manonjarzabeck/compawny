import { use, useState } from "react";
import type { Action } from "../../../models/action";
import type { Department } from "../../../models/department";
import ActionsClient from "../../components/action/action-clients/page-action";
import IntroPage from "../../components/intro-pages/intro-pages";
import Seo from "../../components/seo/seo";
import type { ApiResponse } from "../../models/api_response";
import ActionApiService from "../../services/action_api_service";
import DepartmentApiService from "../../services/department_api_service";

const ListeActionsPage = () => {
	const results = use<ApiResponse<Action[]>>(
		new ActionApiService().selectAll(),
	);

	const departmentResults = use<ApiResponse<Department[]>>(
		new DepartmentApiService().selectAll(),
	);

	const actions = results.data ?? [];
	const departments = departmentResults.data ?? [];

	return (
		<>
			<Seo
				title="Actions bénévoles"
				description="Les actions de bénévolat autour de chez vous"
				url=""
			/>
			<IntroPage
				image="/img/pages/Action.png"
				alt="Dessin bénévoles animaliers de la section Actions Locales"
				title="Parce que chaque action compte 🫶🏼"
				description="Changer les choses, ça commence souvent localement. Un geste, un
					engagement, quelques heures de ton temps peuvent faire une vraie
					différence pour les animaux et les associations qui les protègent. Tu
					peux parcourir les actions proposées et rejoindre celles qui résonnent
					avec tes valeurs."
			/>

			<ActionsClient actions={actions} departments={departments} />
		</>
	);
};

export default ListeActionsPage;

// const ListeActionsPage = () => {
// 	/*
// use permet de récupérer les données d'une promesse dans un composant serveur de React
// */

// 	return (
// 		<>
// 			<Seo
// 				title="Actions bénévoles"
// 				description="Les actions de bénévolat autour de chez vous"
// 				url=""
// 			/>
// 			<IntroAction />
// 			<ActionList />
// 		</>
// 	);
// };

// export default ListeActionsPage;
