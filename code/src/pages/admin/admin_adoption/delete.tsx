"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminAdoptionsParams } from "../../../models/params/admin_adoptions_params";
import AdoptionApiService from "../../../services/adoption_api_service";

const AdminAdoptionDelete = ({ params }: AdminAdoptionsParams) => {
	// récupérer la variable d'URL
	const { id } = params;
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage du composant / page
	useEffect(() => {
		// await est inutilisable dans un useEffect
		// la méthode then équivaut à await ( a utliser dans les hook )
		new AdoptionApiService().delete({ id: id }).then(() => {
			navigate("/admin");
			return;
		});
	}, [id, navigate]);

	return <title>Gestion des adoptions - Supression </title>;
};
export default AdminAdoptionDelete;
