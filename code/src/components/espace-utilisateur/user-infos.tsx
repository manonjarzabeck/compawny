"use client";
import SecurityService from "../../services/security_service";
import Btn from "../btn/Btn";
import styles from "./user-espace.module.css";

const UserInfos = () => {
	return (
		<section className={styles.card}>
			{/* Afficher l'utilisateur stocké */}
			{JSON.stringify(new SecurityService().getUser())}

			<div className={styles.cardHeader}>
				<h1>Bonjour Manon 👋</h1>
				<Btn link="/logout">Déconnexion</Btn>
				<h2 className={styles.cardTitle}>Mes informations</h2>
				<p className={styles.cardSubtitle}>
					Retrouve ici les informations liées à ton compte.
				</p>
			</div>

			<div className={styles.infoList}>
				<div className={styles.infoItem}>
					<span className={styles.infoLabel}>Prénom</span>
					<span className={styles.infoValue}>Manon</span>
				</div>

				<div className={styles.infoItem}>
					<span className={styles.infoLabel}>Nom</span>
					<span className={styles.infoValue}>Jarzabeck</span>
				</div>

				<div className={styles.infoItem}>
					<span className={styles.infoLabel}>Email</span>
					<span className={styles.infoValue}>manon@email.com</span>
				</div>

				<div className={styles.infoItem}>
					<span className={styles.infoLabel}>Compte créé le</span>
					<span className={styles.infoValue}>24 mars 2026</span>
				</div>
			</div>

			<div className={styles.actions}>
				<button type="button" className={styles.primaryBtn}>
					Modifier mes informations
				</button>
			</div>
		</section>
	);
};

export default UserInfos;
