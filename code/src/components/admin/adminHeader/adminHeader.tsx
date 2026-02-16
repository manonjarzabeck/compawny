import React from "react";
import styles from "./adminHeader.module.css";
import BackButton from "./backBtn/backBtn";

const AdminHeader = () => {
	return (
		<header className={styles.adminHeader}>
			<div className={styles.headerInner}>
				<div className={styles.leftBlock}>
					<img
						src="/img/pages/Logo-logo.png"
						alt="Logo Compawny"
						className={styles.adminLogo}
					/>
					<div className={styles.titleBlock}>
						<h1 className={styles.adminTitle}>Compawny</h1>
						<h2 className={styles.adminSubtitle}>Espace Admin</h2>
					</div>
				</div>
				<div className={styles.rightBlock}>
					<BackButton />
				</div>
			</div>
		</header>
	);
};

export default AdminHeader;
