"use client";

import Btn from "../btn/Btn";
import ContactForm from "./contactForm/contactForm";
import styles from "./experience-contact.module.css";

const Reviews = [
	{
		_id: "1",
		name: "Svetlana",
		message:
			"Grâce à Compawny, j’ai rencontré Nino, un chien senior qui attendait depuis longtemps au refuge. Aujourd’hui, il fait partie de ma famille et je ne remercierai jamais assez ce site de m’avoir permis de le trouver.",
	},
	{
		_id: "2",
		name: "Camille",
		message:
			"Je cherchais une façon concrète de me rendre utile près de chez moi. J’ai découvert une action locale grâce au site, j’y suis allée une première fois… et depuis, j’y retourne presque chaque week-end avec énormément de plaisir.",
	},
	{
		_id: "3",
		name: "Sofiane",
		message:
			"J’ai trouvé une association internationale via Compawny et je suis parti vivre une aventure humaine incroyable. Cette expérience m’a profondément marqué, et j’ai déjà hâte de préparer ma prochaine mission.",
	},
];

const ExperienceContact = () => {
	return (
		<section
			className={styles.wrapper}
			aria-labelledby="experience-contact-title"
		>
			<div className={styles.backBtnWrapper}>
				<Btn link="/">Retour à l'accueil</Btn>
			</div>

			<div className={styles.container}>
				<div className={styles.introText}>
					<h1 id="experience-contact-title" className={styles.pageTitle}>
						Partagez votre expérience 💌
					</h1>
					<p className={styles.pageDescription}>
						Vous avez adopté, participé à une action locale ou vécu une belle
						aventure au sein d’une association grâce à Compawny ? <br />
						Racontez-nous ce que cette expérience vous a apporté. Vos mots
						peuvent inspirer d’autres personnes à se lancer à leur tour.
					</p>
				</div>

				<div className={styles.grid}>
					<article className={styles.formSection}>
						<div className={styles.formCard}>
							<h2 className={styles.sectionTitle}>
								Racontez-nous votre histoire...
							</h2>

							<ContactForm />
						</div>
					</article>

					<article
						className={styles.reviewsSection}
						aria-labelledby="reviews-title"
					>
						<h2 id="reviews-title" className={styles.sectionTitleRight}>
							Leurs plus beaux souvenirs 💭
						</h2>

						<ul className={styles.reviewList}>
							{Reviews.map((review) => (
								<li key={review._id} className={styles.reviewBubble}>
									<blockquote className={styles.reviewContent}>
										<p className={styles.quote}>“ {review.message} ”</p>
										<footer className={styles.author}>— {review.name}</footer>
									</blockquote>
								</li>
							))}
						</ul>
					</article>
				</div>
			</div>
		</section>
	);
};

export default ExperienceContact;
