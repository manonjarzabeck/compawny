import heroImage from "/img/pages/ImgPrincipale.png";
import styles from "./hero-section.module.css";
import ScrollButton from "./scroll-button/scroll-button";

function HeroSection() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
			<h2 className={styles.heroTitle}>
				Pour relier les humains qui ont du cœur aux animaux qui attendent une
				main 🤎
			</h2>
		<div className={styles.imageWrapper}>
			<img
				src={heroImage}
				alt="Humains et animaux solidaires"
				className={styles.heroImage}
			/>
		</div>
			<p className={styles.heroDescription}>
				Prêt-e à faire la différence ? Des actions solidaires, des causes à
				soutenir, des compagnons à chérir… tout est là pour agir dès maintenant
				!
			</p>
			</div>
			<ScrollButton />
		</section>
	);
}

export default HeroSection;
