"use client";

import { useEffect, useState } from "react";
import styles from "./backToTop.module.css";

const BackToTop = () => {
	// Gère l’affichage du bouton selon la position de scroll
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Le bouton apparaît après un certain scroll
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (!isVisible) return null;

	return (
		<button
			type="button"
			className={styles.backToTop}
			onClick={scrollToTop}
			aria-label="Revenir en haut de la page"
			title="Revenir en haut"
		>
			↑
		</button>
	);
};

export default BackToTop;
