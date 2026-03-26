import React from "react";
import styles from "./guide.module.css";
import GuideGrid from "./guide-grid";

const GuideSection = () => {
	return (
		<section id="guide" className={styles.guideSection}>
			<p className={styles.guideDescription}>
				J’ai imaginé ce site pour toutes les personnes qui ressentent l’envie
				d’aider, mais qui ne savent pas toujours par où commencer. Un espace
				clair et bienveillant pour explorer des initiatives concrètes, protéger
				les animaux et trouver la manière d’agir qui te correspond. Et parce que
				la solidarité est collective, tu peux également proposer une action
				locale ou un projet qui mérite d’être mis en lumière pour le faire
				découvrir à la communauté.
			</p>
			<GuideGrid />
		</section>
	);
};

export default GuideSection;
