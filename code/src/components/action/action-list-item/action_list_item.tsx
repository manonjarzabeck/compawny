"use client";

import React from "react";
import type { ActionListItemProps } from "../../../models/props/list_item/action_list_item_props";
import SecurityService from "../../../services/security_service";
import UserActionApiService from "../../../services/user_action_api_service";
import Btn from "../../btn/Btn";
import FavoritesBtn from "../../btn/favorites-btn/favorites-btn";
import style from "./action_list_item.module.css";

/* 
=====================================================
 ACTION LIST ITEM (CARTE INDIVIDUELLE)
→ représente une seule action

- affiche les données d'une action (image, titre, description…)
- structure visuellement la carte
- gère les interactions (bouton, lien, favoris…)

👉 rôle : composant UI pur (présentation uniquement)
=====================================================
*/

const ActionListItem = ({
	data,
	favoriteIds,
	setFavoriteIds,
}: ActionListItemProps) => {
	const user = new SecurityService().getUser();
	const token = new SecurityService().getToken();

	// Vérifie si l’action affichée est déjà dans les favoris
	const isFavorite = favoriteIds.includes(data.id);

	const handleToggleFavorite = async () => {
		// Empêche l’action si l’utilisateur n’est pas connecté
		if (!user || !token) return;

		try {
			if (isFavorite) {
				// Si l’action est déjà en favori,
				// on la supprime via l’API
				await new UserActionApiService().delete(
					{
						user_id: user.id,
						action_id: data.id,
					},
					token,
				);

				// Mise à jour immédiate de l’interface
				setFavoriteIds((prev) => prev.filter((id) => id !== data.id));
			} else {
				// Sinon, on ajoute l’action aux favoris
				await new UserActionApiService().insert(
					{
						user_id: user.id,
						action_id: data.id,
					},
					token,
				);

				// Mise à jour locale de l’état sans rechargement
				setFavoriteIds((prev) => [...prev, data.id]);
			}
		} catch (error) {
			console.error("Erreur lors de la mise à jour du favori :", error);
		}
	};

	return (
		<article className={style.card}>
			<div className={style.cardInner}>
				<div className={style.imageWrapper}>
					<img src={`/img/action/${data.image}`} alt={data.name} />
				</div>

				<div className={style.titleRow}>
					<h2 className={style.title}>{data.name}</h2>

					{/* Le bouton favori n’est affiché que si l’utilisateur est connecté */}
					{user && token && (
						<FavoritesBtn
							isFavorite={isFavorite}
							onToggle={handleToggleFavorite}
						/>
					)}
				</div>

				<p className={style.description}>{data.association.name}</p>
				<p className={style.departement}>
					📍 {data.association.department.name}
				</p>

				<Btn link={`/actions/${data.id}`}>En savoir plus 🐾</Btn>
			</div>
		</article>
	);
};

export default ActionListItem;
