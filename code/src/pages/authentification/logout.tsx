"use client";

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../../services/security_service";

const Logout = () => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();
	// // supprimer à l'affichage du composant / page
	useEffect(() => {
		// 	const reset = async () => {
		// 		// supprimer l'utilisateur stocké
		// 		new SecurityService().setUser(null);
		// 		// supprimer le token JWT
		// 	await new SecurityService().setToken(null);
		// };

		// 	reset();
		// déconnexion
		new SecurityService().logout();

		// redirection vers une route React
		navigate("/authentification");
	}, [navigate]);

	return <></>;
};

export default Logout;
