"use client";

import styles from "./scroll-button.module.css";

const ScrollButton = () => {
	/* 
	=====================================================
	GESTION DU SCROLL
	→ récupère l’élément cible via son id
	→ déclenche un scroll fluide vers cette section
	=====================================================
	*/
	const handleScroll = () => {
		const target = document.getElementById("guide");
		// Si la section existe, on scroll jusqu’à elle
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<button
			type="button"
			className={styles.scrollBtn}
			onClick={handleScroll}
			/* 
			=====================================================
			ACCESSIBILITÉ
			→ aria-label décrit l’action pour les lecteurs d’écran
			=====================================================
			*/
			aria-label="Faire défiler sur la section suivante : le guide du bénévole"
		>
			↓
		</button>
	);
};

export default ScrollButton;
