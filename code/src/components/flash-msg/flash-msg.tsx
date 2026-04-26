"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "./flash-msg.module.css";

const FlashMessage = () => {
	// useLocation permet de récupérer les données passées via la navigation (navigate)
	const location = useLocation();

	// State local pour afficher temporairement le message
	const [visibleMessage, setVisibleMessage] = useState<string | null>(null);

	useEffect(() => {
		// Récupère le message envoyé via navigate (location.state)
		const message = location.state?.message;

		// Si aucun message, on ne fait rien
		if (!message) return;

		// On stocke le message dans le state local
		setVisibleMessage(message);

		// Timer : permet de faire disparaître le message après 3 secondes
		const timer = setTimeout(() => {
			setVisibleMessage(null);
		}, 3000);

		// Nettoyage du timer pour éviter les effets secondaires
		return () => clearTimeout(timer);

		// location.key permet de détecter un changement de navigation
		// → important pour ne déclencher l'effet qu'une seule fois par redirection
	}, [location.key]);

	// Si aucun message à afficher, on ne rend rien
	if (!visibleMessage) return null;

	// Affichage du message avec le style CSS
	return <p className={styles.flashMessage}>{visibleMessage}</p>;
};

export default FlashMessage;
