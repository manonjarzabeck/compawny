"use client";

import type { FavoritesBtnProps } from "../../../models/props/favorites-btn_props";
import styles from "./favorites-btn.module.css";

const FavoritesBtn = ({ isFavorite, onToggle }: FavoritesBtnProps) => {
	return (
		<button
			type="button"
			className={styles.favoriteBtn}
			onClick={onToggle}
			aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
			title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
		>
			{isFavorite ? "🤎" : "♡"}
		</button>
	);
};

export default FavoritesBtn;
