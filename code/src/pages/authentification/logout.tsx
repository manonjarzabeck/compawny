"use client";

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../../services/security_service";

const Logout = () => {
	// Permet de rediriger l'utilisateur
	const navigate = useNavigate();

	// Déconnexion automatique au chargement de la page
	useEffect(() => {
		const reset = async () => {
			// Suppression des informations utilisateur
			new SecurityService().setUser(null);

			// Suppression du token JWT
			await new SecurityService().setToken(null);

			// Nettoyage complémentaire (si logique interne)
			new SecurityService().logout();

			/* 
			=====================================================
			REDIRECTION AVEC MESSAGE
			→ permet d'afficher un feedback utilisateur
			sur la page d'authentification
			=====================================================
			*/
			navigate("/authentification", {
				state: { message: "Vous avez bien été déconnecté." },
			});
		};

		reset();
	}, [navigate]);

	return null;
};

export default Logout;
