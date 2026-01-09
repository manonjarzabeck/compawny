import heroImage from "/img/pages/ImgPrincipale.png"; // ton image
import styles from "./hero-section.module.css";
import ScrollButton from "./scroll-button";

function HeroSection() {
	return (
		<section className={styles.hero}>
			<h2 className="hero__title">
				Pour relier les humains qui ont du cœur aux animaux qui attendent une
				main 🤎
			</h2>

			<img
				src={heroImage}
				alt="Humains et animaux solidaires"
				className="hero__image"
			/>

			<p className="hero__description">
				Prêt-e à faire la différence ? Des actions solidaires, des causes à
				soutenir, des compagnons à chérir… tout est là pour agir dès maintenant
				!
			</p>

			<ScrollButton />
		</section>
	);
}

export default HeroSection;
