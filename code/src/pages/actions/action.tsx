import { use, useState } from "react";
import type { Action } from "../../../models/action";
import type { Department } from "../../../models/department";
import PageActions from "../../components/action/action-clients/page-action";
import IntroPage from "../../components/intro-pages/intro-pages";
import Seo from "../../components/seo/seo";
import type { ApiResponse } from "../../models/api_response";
import ActionApiService from "../../services/action_api_service";
import DepartmentApiService from "../../services/department_api_service";

const ListeActionsPage = () => {
	/* 
	=====================================================
	RÉCUPÉRATION DES DONNÉES ACTIONS
	→ appel API pour récupérer toutes les actions
	→ use() permet d’attendre directement la réponse
	=====================================================
	*/
	const results = use<ApiResponse<Action[]>>(
		new ActionApiService().selectAll(),
	);

	/* 
	=====================================================
	RÉCUPÉRATION DES DÉPARTEMENTS
	→ utilisé pour filtrer les actions côté utilisateur
	=====================================================
	*/
	const departmentResults = use<ApiResponse<Department[]>>(
		new DepartmentApiService().selectAll(),
	);

	/* 
	=====================================================
	SÉCURISATION DES DONNÉES
	→ si data est undefined (chargement ou erreur),
	   on retourne un tableau vide pour éviter les crashs
	=====================================================
	*/
	const actions = results.data ?? [];
	const departments = departmentResults.data ?? [];

	return (
		<>
			{/* 
			=====================================================
			SEO
			→ améliore le référencement de la page
			=====================================================
			*/}
			<Seo
				title="Actions bénévoles"
				description="Les actions de bénévolat autour de chez vous"
				url="/actions"
			/>

			{/* 
			=====================================================
			SECTION INTRODUCTION
			→ présentation de la page + contexte utilisateur
			=====================================================
			*/}
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

			{/* 
			=====================================================
			AFFICHAGE DES ACTIONS
			→ envoie les actions + départements au composant
			   qui gère la liste + le filtre
			=====================================================
			*/}
			<PageActions actions={actions} departments={departments} />
		</>
	);
};

export default ListeActionsPage;
