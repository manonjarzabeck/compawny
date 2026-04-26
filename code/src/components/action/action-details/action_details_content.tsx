"use client";

import React, { useEffect, useState } from "react";
import { formatDateFR } from "../../../models/outils/date";
import type { ActionDetailsContentProps } from "../../../models/props/details_content/action_details_content_props";
import SecurityService from "../../../services/security_service";
import UserActionApiService from "../../../services/user_action_api_service";
import AssociationDetailsContent from "../../association/association-details/association_details_content";
import BackBtn from "../../btn/backBtn";
import FavoritesBtn from "../../btn/favorites-btn/favorites-btn";
import style from "./action_details_content.module.css";

const ActionDetailsContent = ({ data }: ActionDetailsContentProps) => {
	// Récupération de l'utilisateur connecté et du token
	const user = new SecurityService().getUser();
	const token = new SecurityService().getToken();

	// État local : indique si l'action est en favoris
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const fetchFavorites = async () => {
			// Si l'utilisateur n'est pas connecté, on ne charge pas les favoris
			if (!user || !token) return;

			try {
				// Récupère les actions favorites de l'utilisateur
				const results = await new UserActionApiService().selectByUser(
					user.id,
					token,
				);

				// Transforme les résultats en liste d'identifiants
				const favoriteIds = results.data?.map((item) => item.id) ?? [];

				// Vérifie si l'action affichée fait partie des favoris
				setIsFavorite(favoriteIds.includes(data.id));
			} catch (error) {
				console.error("Erreur lors du chargement des favoris :", error);
			}
		};

		fetchFavorites();
	}, [data.id, user, token]);

	// Ajoute ou retire l'action des favoris
	const handleToggleFavorite = async () => {
		if (!user || !token) return;

		try {
			if (isFavorite) {
				// Suppression du favori
				await new UserActionApiService().delete(
					{
						user_id: user.id,
						action_id: data.id,
					},
					token,
				);

				setIsFavorite(false);
			} else {
				// Ajout du favori
				await new UserActionApiService().insert(
					{
						user_id: user.id,
						action_id: data.id,
					},
					token,
				);

				setIsFavorite(true);
			}
		} catch (error) {
			console.error("Erreur lors de la mise à jour du favori :", error);
		}
	};

	return (
		<>
			{/* Bouton retour vers la page liste des actions */}
			<BackBtn fallbackLink="/actions" />

			{/* Conteneur principal de la page détail */}
			<section className={style.container}>
				<div className={style.grid}>
					{/* Carte principale de l'action */}
					<div className={`${style.card} ${style.cardPrimary}`}>
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

							<p className={style.description}>{data.description}</p>

							<p className={style.date}>
								Cette initiative est proposée par l'association{" "}
								<strong>{data.association.name}</strong> et a été publiée le{" "}
								{formatDateFR(data.published)} 🐾
							</p>
						</div>
					</div>

					{/* Bloc de droite : détail de l'association + carte MapLibre */}
					<div className={style.associationWrapper}>
						<AssociationDetailsContent
							data={data.association}
							zoom={10}
							mapStyle="https://tiles.openfreemap.org/styles/bright"
							tabletLayout="row"
							size="compact"
							showBackButton={false}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ActionDetailsContent;
