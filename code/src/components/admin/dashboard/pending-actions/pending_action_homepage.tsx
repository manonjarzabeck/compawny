import React, { use } from "react";
import { NavLink } from "react-router";
import ActionApiService from "../../../../services/action_api_service";
import BackBtn from "../../../btn/backBtn";
import AdminFlashMessage from "../../admin-flash-msg/admin-flash-msg";
import styles from "./pending_action_homepage.module.css";

const PendingActionHomepage = () => {
	const actions = use(new ActionApiService().selectAll()).data ?? [];

	const pendingActions = actions.filter(
		(item) => item.source === "visitor" && !item.is_active,
	);

	return (
		<>
			<BackBtn fallbackLink="/admin">Revenir au tableau de bord</BackBtn>
			<section className={styles.container}>
				<h2 className={styles.title}>Actions proposées par les utilisateurs</h2>
				<AdminFlashMessage />

				{/* Si aucune action */}
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
										<span className={styles.label}>Nom de l'association </span>
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
		</>
	);
};

export default PendingActionHomepage;
