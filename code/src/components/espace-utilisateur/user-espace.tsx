"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import type { Action } from "../../../models/action";
import type { ApiResponse } from "../../models/api_response";
import SecurityService from "../../services/security_service";
import UserActionApiService from "../../services/user_action_api_service";
import Btn from "../btn/Btn";
import FavoritesBtn from "../btn/favorites-btn/favorites-btn";
import styles from "./user-espace.module.css";

const UserEspace = () => {
	const user = new SecurityService().getUser();
	const token = new SecurityService().getToken();

	// Stocke la liste des actions favorites de l’utilisateur
	const [favorites, setFavorites] = useState<Action[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFavorites = async () => {
			// Si l’utilisateur n’est pas connecté, on arrête le chargement
			if (!user || !token) {
				setLoading(false);
				return;
			}

			try {
				// Récupère les favoris depuis l’API
				const results: ApiResponse<Action[]> =
					await new UserActionApiService().selectByUser(user.id, token);

				if (results.data) {
					setFavorites(results.data);
				}
			} catch (error) {
				console.error("Erreur lors du chargement des favoris :", error);
			} finally {
				setLoading(false);
			}
		};

		fetchFavorites();
	}, [user, token]);

	const handleRemoveFavorite = async (actionId: number) => {
		if (!user || !token) return;

		try {
			// Supprime le favori en base de données
			await new UserActionApiService().delete(
				{
					user_id: user.id,
					action_id: actionId,
				},
				token,
			);

			// Met à jour l’interface sans recharger la page
			setFavorites((prev) => prev.filter((item) => item.id !== actionId));
		} catch (error) {
			console.error("Erreur lors de la suppression du favori :", error);
		}
	};

	if (!user || !token || loading) {
		return <p className={styles.loading}>Chargement...</p>;
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.backBtnWrapper}>
				<Btn link="/">Revenir à l'accueil</Btn>
			</div>

			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<p className={styles.welcome}>Bonjour {user.email} 👋</p>
					<h1 className={styles.cardTitle}>Mes favoris 🤎</h1>
					<p className={styles.cardSubtitle}>
						Retrouve ici les actions que tu as sauvegardées pour les consulter
						plus facilement.
					</p>
				</div>
			</div>

			<div className={styles.favoritesSection}>
				{favorites.length > 0 ? (
					<div className={styles.favoritesGrid}>
						{favorites.map((item) => (
							<article key={item.id} className={styles.favoriteCard}>
								<div className={styles.favoriteCardInner}>
									<div className={styles.favoriteImageWrapper}>
										<img
											src={`/img/action/${item.image}`}
											alt={item.name}
											className={styles.favoriteImage}
										/>
									</div>

									<div className={styles.favoriteTitleRow}>
										<h3 className={styles.favoriteTitle}>{item.name}</h3>

										<FavoritesBtn
											isFavorite={true}
											onToggle={() => handleRemoveFavorite(item.id)}
										/>
									</div>

									<p className={styles.favoriteDescription}>
										{item.description}
									</p>

									<div className={styles.favoriteActions}>
										<NavLink
											to={`/actions/${item.id}`}
											className={styles.secondaryBtn}
										>
											Voir la fiche 🐾
										</NavLink>
									</div>
								</div>
							</article>
						))}
					</div>
				) : (
					<p className={styles.emptyState}>
						Tu n’as pas encore ajouté d’action en favoris pour le moment.
					</p>
				)}
			</div>

			<div className={styles.logoutWrapper}>
				<NavLink to="/logout" className={styles.logoutBtn}>
					Déconnexion
				</NavLink>
			</div>
		</section>
	);
};

export default UserEspace;
