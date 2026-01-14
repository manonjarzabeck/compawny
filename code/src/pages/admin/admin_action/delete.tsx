"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminActionsParams } from "../../../models/params/admin_actions_params";
import ActionApiService from "../../../services/action_api_service";

const AdminActionDelete = ({ params }: AdminActionsParams) => {
	// récupérer la variable d'URL
	const { id } = params;
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage du composant / page
	useEffect(() => {
		// await est inutilisable dans un useEffect
		// la méthode then équivaut à await ( a utliser dans les hook )
		new ActionApiService().delete({ id: id }).then(() => {
			navigate("/admin");
			return;
		});
	}, [id, navigate]);

	return <title>Gestion des actions - Supression </title>;
};
export default AdminActionDelete;
