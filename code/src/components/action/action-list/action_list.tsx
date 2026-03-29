"use client";

import React, { useEffect, useState } from "react";
import type { Action } from "../../../../models/action";
import type { ApiResponse } from "../../../models/api_response";
import type { FilterActionsProps } from "../../../models/props/filtre/filtered_actions_props";
import SecurityService from "../../../services/security_service";
import UserActionApiService from "../../../services/user_action_api_service";
import ActionListItem from "../action-list-item/action_list_item";
import style from "./action_list.module.css";

const ActionList = ({ actions }: FilterActionsProps) => {
	const user = new SecurityService().getUser();
	const token = new SecurityService().getToken();

	const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			if (!user || !token) return;

			try {
				const results: ApiResponse<Action[]> =
					await new UserActionApiService().selectByUser(user.id, token);

				if (results.data) {
					setFavoriteIds(results.data.map((item) => item.id));
				}
			} catch (error) {
				console.error("Erreur lors du chargement des favoris :", error);
			}
		};

		fetchFavorites();
	}, [user, token]);

	return (
		<section className={style.grid}>
			{actions
				.filter((item) => item.is_active)
				.map((item) => (
					<ActionListItem
						key={item.id}
						data={item}
						favoriteIds={favoriteIds}
						setFavoriteIds={setFavoriteIds}
					/>
				))}
		</section>
	);
};

export default ActionList;
