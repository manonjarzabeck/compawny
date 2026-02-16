import React from "react";
import styles from "./dashboard.module.css";

const DashboardAdmin = () => {
	return (
		<div className={styles.dashboardContainer}>
			{/* Section principale avec les stats */}
			<div className={styles.mainStats}>
				<div className={styles.card}>
					<h3>Total Actions</h3>
					<p className={styles.number}>18</p>
				</div>
				<div className={styles.card}>
					<h3>Actions en ligne </h3>
					<p className={styles.number}>18</p>
				</div>
				<div className={styles.card}>
					<h3>Associations internationales</h3>
					<p className={styles.number}>10</p>
				</div>
				<div className={styles.card}>
					<h3>Animaux à l'adoption </h3>
					<p className={styles.number}>20</p>
				</div>
			</div>

			{/* Section à droite : actions en attente */}
			<div className={styles.card}>
				<h3>Actions en attente</h3>
				<div className={styles.number}>3</div>
			</div>
		</div>
	);
};

export default DashboardAdmin;
