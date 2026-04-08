"use client";

import type { FavoritesBtnProps } from "../../../models/props/favorites-btn_props";
import styles from "./favorites-btn.module.css";

const FavoritesBtn = ({ isFavorite, onToggle }: FavoritesBtnProps) => {
	return (
		<button
			type="button"
			className={styles.favoriteBtn}
			// Déclenche l’action transmise par le composant parent
			onClick={onToggle}
			// Améliore l’accessibilité du bouton
			aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
			title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
		>
			{/* Affiche une icône différente selon l’état favori */}
			{isFavorite ? "🤎" : "♡"}
		</button>
	);
};

export default FavoritesBtn;
