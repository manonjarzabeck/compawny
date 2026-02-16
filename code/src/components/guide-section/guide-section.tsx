import React from "react";
import styles from "./guide.module.css";
import GuideGrid from "./guide-grid";

const GuideSection = () => {
	return (
		<section className={styles.guideSection}>
			<p className={styles.guideDescription}>
				J’ai imaginé ce site pour toutes les personnes qui ressentent l’envie
				d’aider, mais qui ne savent pas trop par où débuter. Un lieu simple,
				bienveillant, où tu peux découvrir différentes manières d’agir et
				choisir celles qui te ressemblent le plus. Et si tu veux aller un peu
				plus loin dans l’aventure, tu peux créer ton espace personnel : un
				endroit rien qu’à toi pour garder tes coups de cœur et partager de
				belles initiatives.
			</p>
			<GuideGrid />
		</section>
	);
};

export default GuideSection;
