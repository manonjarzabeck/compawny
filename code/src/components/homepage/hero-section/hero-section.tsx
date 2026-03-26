import styles from "./hero-section.module.css";
import ScrollButton from "./scroll-button/scroll-button";

const HeroSection = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<h2 className={styles.heroTitle}>
					Pour relier les humains qui ont du cœur aux animaux qui attendent une
					main 🤎
				</h2>
				<img
					src="/img/homepage/ImgPrincipale.png"
					alt="Humains et animaux solidaires"
					className={styles.heroImage}
				/>
				<p className={styles.heroDescription}>
					Prêt-e à faire la différence ? Trois manières de contribuer
					t’attendent : participer à des initiatives qui protègent la cause
					animale, soutenir des projets passionnés à travers le monde et offrir
					un foyer à un compagnon qui attend une seconde chance.
				</p>
			</div>
			<ScrollButton />
		</section>
	);
};

export default HeroSection;
