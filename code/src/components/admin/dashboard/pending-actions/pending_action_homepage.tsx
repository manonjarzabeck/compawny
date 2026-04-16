import React, { use } from "react";
import { NavLink } from "react-router";
import ActionApiService from "../../../../services/action_api_service";
import Btn from "../../../btn/Btn";
import AdminFlashMessage from "../../admin-flash-msg/admin-flash-msg";
import styles from "./pending_action_homepage.module.css";

const PendingActionHomepage = () => {
	// Récupère toutes les actions
	const actions = use(new ActionApiService().selectAll()).data ?? [];

	// Ne conserve que les actions proposées par des visiteurs
	// et qui ne sont pas encore actives
	const pendingActions = actions.filter(
		(item) => item.source === "visitor" && !item.is_active,
	);

	return (
		<section className={styles.container}>
			{/* Bouton de retour vers le tableau de bord admin */}
			<Btn link="/admin">Revenir au tableau de bord</Btn>

			{/* En-tête de page */}
			<div className={styles.intro}>
				<h2 className={styles.title}>Actions proposées</h2>
				<p className={styles.subtitle}>
					Consultez ici les actions proposées depuis le formulaire public du
					site.
				</p>
			</div>

			{/* Message flash admin éventuel */}
			<AdminFlashMessage />

			{/* Si aucune action n’est en attente */}
			{pendingActions.length === 0 ? (
				<p className={styles.emptyMessage}>
					Aucune action proposée pour le moment 🐾
				</p>
			) : (
				<div className={styles.List}>
					{pendingActions.map((item) => {
						return (
							<div className={styles.Card} key={item.id}>
								<p className={styles.itemRow}>
									<span className={styles.label}>Nom de l’action</span>
									<span className={styles.value}>{item.name}</span>
								</p>

								<p className={styles.itemRow}>
									<span className={styles.label}>Nom de l’association</span>
									<span className={styles.value}>
										{item.association_proposal}
									</span>
								</p>

								<p className={styles.itemRow}>
									<span className={styles.label}>Description</span>
									<span className={styles.value}>{item.description}</span>
								</p>

								<div className={styles.buttons}>
									<NavLink
										className={`${styles.btn} ${styles.btnEdit}`}
										to={`/admin/action-form/${item.id}`}
									>
										Modifier
									</NavLink>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default PendingActionHomepage;
