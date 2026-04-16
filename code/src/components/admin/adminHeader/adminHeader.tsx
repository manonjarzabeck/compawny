import React from "react";
import { NavLink } from "react-router";
import styles from "./adminHeader.module.css";

const AdminHeader = () => {
	return (
		<header className={styles.adminHeader}>
			<div className={styles.headerInner}>
				{/* Bloc logo + titres menant vers le tableau de bord admin */}
				<NavLink to="/admin" className={styles.logoLink}>
					<div className={styles.leftBlock}>
						<img
							src="/img/icons_logo/Compawny.png"
							alt="Logo Compawny"
							className={styles.adminLogo}
						/>
						<div className={styles.titleBlock}>
							<h1 className={styles.adminTitle}>Compawny</h1>
							<h2 className={styles.adminSubtitle}>Espace Admin</h2>
						</div>
					</div>
				</NavLink>
			</div>
		</header>
	);
};

export default AdminHeader;
