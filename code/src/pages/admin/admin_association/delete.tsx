"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminAssociationsParams } from "../../../models/params/admin/admin_associations_params";
import AssociationApiService from "../../../services/association_api_service";

const AdminAssociationDelete = ({ params }: AdminAssociationsParams) => {
	// récupérer la variable d'URL
	const { id } = params;
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage du composant / page
	useEffect(() => {
		// await est inutilisable dans un useEffect
		// la méthode then équivaut à await ( a utliser dans les hook )
		new AssociationApiService().delete({ id: id }).then(() => {
			navigate("/admin");
			return;
		});
	}, [id, navigate]);

	return <title>Gestion des associations - Supression </title>;
};
export default AdminAssociationDelete;
