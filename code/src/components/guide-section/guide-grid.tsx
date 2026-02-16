import React from "react";
import Btn from "../btn/Btn";
import styles from "./guide.module.css";

const GuideGrid = () => {
	return (
		<div className={styles.guideGrid}>
			<article className={styles.guideCard}>
				<img
					className={styles.imgCard}
					src="/img/pages/actionguide.jpg"
					alt="Catégorie Action"
				/>
				<p className={styles.descriptionCard}>
					Tu veux commencer à faire la différence près de chez toi ? Découvre
					des initiatives simples et accessibles pour aider selon tes envies.{" "}
				</p>
				<Btn link="/actions">Je veux aider 🤎</Btn>
			</article>
			<article className={styles.guideCard}>
				<img
					className={styles.imgCard}
					src="/img/pages/assoguide.jpg"
					alt="Catégorie Associations Internationales"
				/>
				<p className={styles.descriptionCard}>
					Tu veux aider au-delà des frontières ? Découvre les associations
					internationales qui font la différence.
				</p>
				<Btn link="/associations">Je veux aider 🤎</Btn>
			</article>
			<article className={styles.guideCard}>
				<img
					className={styles.imgCard}
					src="/img/pages/adoptionguide.png"
					alt="Catégorie Adoptions SOS"
				/>
				<p className={styles.descriptionCard}>
					Seniors, fragiles ou oubliés… ce sont souvent eux qui donnent le plus
					d’amour. Et si leur nouvelle vie commençait avec vous ?
				</p>
				<Btn link="/adoptions">Je veux aider 🤎</Btn>
			</article>
		</div>
	);
};

export default GuideGrid;
