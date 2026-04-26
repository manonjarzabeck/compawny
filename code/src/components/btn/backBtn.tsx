"use client";

import React from "react";
import { useNavigate } from "react-router";
import type { BackBtnProps } from "../../models/props/back_btn_props";
import Btn from "../btn/Btn";
import styles from "./Btn.module.css";

const BackBtn = ({
	fallbackLink = "/", // lien de secours si aucun historique
	children = "Retour", // texte du bouton (personnalisable)
	variant = "default", // style du bouton (réutilisable)
}: BackBtnProps) => {
	// Hook React Router pour gérer la navigation
	const navigate = useNavigate();
	/* 
	=====================================================
	GESTION DU RETOUR
	→ vérifie si l’utilisateur a un historique
	→ sinon redirige vers une page par défaut
	=====================================================
	*/
	const handleBack = () => {
		if (window.history.length > 1) {
			// Retour à la page précédente
			navigate(-1);
		} else {
			// Redirection vers fallback si pas d’historique
			navigate(fallbackLink);
		}
	};
	return (
		<div className={styles.backBtnWrapper}>
			{/* 
			Bouton réutilisable avec gestion du clic personnalisée
			*/}
			<Btn onClick={handleBack} variant={variant}>
				{children}
			</Btn>
		</div>
	);
};

export default BackBtn;
