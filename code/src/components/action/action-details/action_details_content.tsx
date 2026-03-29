"use client";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { formatDateFR } from "../../../models/outils/date";
import type { ActionDetailsContentProps } from "../../../models/props/details_content/action_details_content_props";
import SecurityService from "../../../services/security_service";
import UserActionApiService from "../../../services/user_action_api_service";
import AssociationDetailsContent from "../../association/association-details/association_details_content";
import Btn from "../../btn/Btn";
import FavoritesBtn from "../../btn/favorites-btn/favorites-btn";
import style from "./action_details_content.module.css";

const ActionDetailsContent = ({ data }: ActionDetailsContentProps) => {
	const navigate = useNavigate();

	const user = new SecurityService().getUser();
	const token = new SecurityService().getToken();

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const fetchFavorites = async () => {
			if (!user || !token) return;

			try {
				const results = await new UserActionApiService().selectByUser(
					user.id,
					token,
				);

				const favoriteIds = results.data?.map((item) => item.id) ?? [];
				setIsFavorite(favoriteIds.includes(data.id));
			} catch (error) {
				console.error("Erreur lors du chargement des favoris :", error);
			}
		};

		fetchFavorites();
	}, [data.id, user, token]);

	const handleToggleFavorite = async () => {
		if (!user || !token) return;

		try {
			if (isFavorite) {
				await new UserActionApiService().delete(
					{
						user_id: user.id,
						action_id: data.id,
					},
					token,
				);

				setIsFavorite(false);
			} else {
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
			<div>
				<Btn
					onClick={() => {
						if (window.history.length > 1) {
							navigate(-1);
						} else {
							navigate("/actions");
						}
					}}
				>
					Retour
				</Btn>
			</div>

			<section className={style.container}>
				<div className={style.grid}>
					<div className={`${style.card} ${style.cardPrimary}`}>
						<div className={style.cardInner}>
							<div className={style.imageWrapper}>
								<img src={`/img/action/${data.image}`} alt={data.name} />
							</div>

							<div className={style.titleRow}>
								<h2 className={style.title}>{data.name}</h2>

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
								<strong>{data.association.name}</strong> et à été publié le{" "}
								{formatDateFR(data.published)} 🐾
							</p>
						</div>
					</div>

					<div className={style.associationWrapper}>
						<AssociationDetailsContent
							data={data.association}
							zoom={10}
							mapStyle="https://tiles.openfreemap.org/styles/bright"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ActionDetailsContent;
