import React, { use } from "react";
import { NavLink } from "react-router";
import ActionApiService from "../../../services/action_api_service";
import AdoptionApiService from "../../../services/adoption_api_service";
import AssociationApiService from "../../../services/association_api_service";
import Btn from "../../btn/Btn";
import styles from "./dashboard.module.css";

const DashboardAdmin = () => {
	const actions = use(new ActionApiService().selectAll()).data ?? [];
	const associations = use(new AssociationApiService().selectAll()).data ?? [];
	const adoptions = use(new AdoptionApiService().selectAll()).data ?? [];

	const totalActions = actions.length;
	const onlineActions = actions.filter((item) => item.is_active).length;
	const pendingActions = actions.filter(
		(item) => item.source === "visitor" && !item.is_active,
	).length;
	const internationalAssociations = associations.filter(
		(item) => item.is_international,
	).length;
	const activeAdoptions = adoptions.filter((item) => item.is_adoptable).length;

	return (
		<section className={styles.dashboardContainer}>
			<div className={styles.statsGrid}>
				<div className={styles.card}>
					<h3>Total actions</h3>
					<p className={styles.number}>{totalActions}</p>
				</div>

				<div className={styles.card}>
					<h3>Actions en ligne</h3>
					<p className={styles.number}>{onlineActions}</p>
				</div>

				<div className={styles.card}>
					<h3>Associations internationales</h3>
					<p className={styles.number}>{internationalAssociations}</p>
				</div>

				<div className={styles.card}>
					<h3>Animaux à l'adoption</h3>
					<p className={styles.number}>{activeAdoptions}</p>
				</div>

				<div className={`${styles.card} ${styles.pendingCard}`}>
					<h4 className={styles.pendingTitle}>Actions en attente</h4>
					<p className={`${styles.number} ${styles.pendingNumber}`}>
						{pendingActions}
					</p>

					<Btn link="/admin/pending-action-homepage">
						Voir les actions proposées 👉🏼
					</Btn>
				</div>
			</div>
		</section>
	);
};

export default DashboardAdmin;
