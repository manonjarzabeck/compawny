import React from "react";
import Btn from "../../btn/Btn";
import styles from "./guide.module.css";

const GuideGrid = () => {
	return (
		<div className={styles.guideGrid}>
			<article className={styles.guideCard}>
				<img
					className={styles.imgCard}
					src="/img/homepage/actionguide.jpg"
					alt="Catégorie Actions"
				/>

				<p className={styles.descriptionCard}>
					Tu veux commencer à faire la différence près de chez toi et agir pour
					la cause animale ? Découvre des initiatives locales pour protéger les
					animaux et soutenir les associations engagées autour de toi.
				</p>

				<Btn link="/actions" variant="homepage">
					Découvrir les actions locales ❣️
				</Btn>
			</article>

			<article className={styles.guideCard}>
				<img
					className={styles.imgCard}
					src="/img/homepage/assoguide.jpg"
					alt="Catégorie Associations Internationales"
				/>

				<p className={styles.descriptionCard}>
					Tu souhaites agir au-delà des frontières ? Découvre des associations
					engagées à travers le monde, qui œuvrent avec cœur pour protéger et
					accompagner les animaux là où ils en ont le plus besoin.
				</p>

				<Btn link="/associations" variant="homepage">
					Explorer les associations 🌎
				</Btn>
			</article>

			<article className={styles.guideCard}>
				<img
					className={styles.imgCard}
					src="/img/homepage/adoptionguide.png"
					alt="Catégorie Adoptions SOS"
				/>

				<p className={styles.descriptionCard}>
					Et si ton futur compagnon t’attendait déjà quelque part ? Découvre des
					animaux seniors, fragiles ou oubliés qui n’attendent qu’une seconde
					chance et une famille prête à leur offrir une nouvelle vie.
				</p>

				<Btn link="/adoptions" variant="homepage">
					Voir les animaux à l'adoption 🐾
				</Btn>
			</article>
		</div>
	);
};

export default GuideGrid;
