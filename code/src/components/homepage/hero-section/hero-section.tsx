import styles from "./hero-section.module.css";
import ScrollButton from "./scroll-button/scroll-button";

const HeroSection = () => {
	return (
		/* 
			Section d'introduction de la page d'accueil
			→ présente le message principal du site
			→ contient aussi un bouton de scroll vers la section suivante
		*/
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				{/* Titre principal de la homepage */}
				<h2 className={styles.heroTitle}>
					Pour relier les humains qui ont du cœur aux animaux qui attendent une
					main 🤎
				</h2>

				{/* Illustration principale */}
				<img
					src="/img/homepage/ImgPrincipale.png"
					alt="Humains et animaux solidaires"
					className={styles.heroImage}
				/>

				{/* Petit texte d'introduction */}
				<p className={styles.heroDescription}>
					Prêt-e à faire la différence ? Trois manières de contribuer
					t’attendent : participer à des initiatives qui protègent la cause
					animale, soutenir des projets passionnés à travers le monde et offrir
					un foyer à un compagnon qui attend une seconde chance.
				</p>
			</div>

			{/* 
				Bouton affiché sur desktop :
				il permet d'aller directement à la section suivante
			*/}
			<div className={styles.scrollWrapper}>
				<ScrollButton />
			</div>
		</section>
	);
};

export default HeroSection;
