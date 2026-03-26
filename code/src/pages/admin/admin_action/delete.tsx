"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import { string } from "zod";
import type { AdminActionsParams } from "../../../models/params/admin/admin_actions_params";
import ActionApiService from "../../../services/action_api_service";
import SecurityService from "../../../services/security_service";

const AdminActionDelete = ({ params }: AdminActionsParams) => {
	// récupérer la variable d'URL
	const { id } = params;
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage du composant / page
	useEffect(() => {
		const confirmed = confirm(
			"Êtes-vous sûr de vouloir supprimer cette action ? Cette opération est irréversible.",
		);

		if (!confirmed) {
			navigate("/admin/action-homepage");
			return;
		}
		// await est inutilisable dans un useEffect
		// la méthode then équivaut à await ( a utliser dans les hook )
		new ActionApiService()
			.delete({ id: id }, new SecurityService().getToken() as string)
			.then((process) => {
				if ([200, 201].includes(process.status)) {
					navigate("/admin/action-homepage", {
						state: { message: "L'action a bien été supprimée." },
					});
					return;
				}

				navigate("/admin/action-homepage", {
					state: { message: "Une erreur est survenue lors de la suppression." },
				});
			});
	}, [id, navigate]);

	return <title>Gestion des actions - Supression </title>;
};
export default AdminActionDelete;
