"use client";

import React from "react";
import { NavLink } from "react-router";
import styles from "./authButton.module.css";

const AuthButton = () => {
	return (
		<section className={styles.authBtnSection}>
			<NavLink to={"/authentification"} className={styles.authBtn}>
				Connexion / Inscription
			</NavLink>
		</section>
	);
};

export default AuthButton;
