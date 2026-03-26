import styles from "./user-espace.module.css";

const favorites = [
	{
		id: 1,
		title: "Nala",
		type: "Adoption",
		description:
			"Jeune chatte douce et affectueuse, à la recherche d’un foyer calme et aimant.",
		image: "/img/adoption/nala.jpg",
	},
	{
		id: 2,
		title: "Refuge Cat & Co",
		type: "Association",
		description:
			"Une association engagée dans la protection et le soin des animaux abandonnés.",
		image: "/img/association/cat_and_co.png",
	},
	{
		id: 3,
		title: "Collecte de matériel",
		type: "Action",
		description:
			"Une action locale pour récolter nourriture, couvertures et accessoires pour les refuges.",
		image: "/img/action/a9.jpg",
	},
];

const UserFavorites = () => {
	return (
		<section className={styles.card}>
			<div className={styles.cardHeader}>
				<h2 className={styles.cardTitle}>Mes favoris</h2>
				<p className={styles.cardSubtitle}>
					Voici les contenus que tu as mis de côté pour les retrouver plus
					facilement.
				</p>
			</div>

			<div className={styles.favoritesGrid}>
				{favorites.map((item) => (
					<article key={item.id} className={styles.favoriteCard}>
						<div className={styles.favoriteImageWrapper}>
							<img
								src={item.image}
								alt={item.title}
								className={styles.favoriteImage}
							/>
							<span className={styles.badge}>{item.type}</span>
						</div>

						<div className={styles.favoriteContent}>
							<h3 className={styles.favoriteTitle}>{item.title}</h3>
							<p className={styles.favoriteDescription}>{item.description}</p>
						</div>

						<div className={styles.favoriteActions}>
							<button type="button" className={styles.secondaryBtn}>
								Voir la fiche
							</button>
							<button type="button" className={styles.iconBtn}>
								Retirer
							</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default UserFavorites;
