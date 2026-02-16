"use client";

import React from "react";
import { NavLink } from "react-router";
import styles from "./backBtn.module.css";

const BackButton = () => {
	return (
		<section className={styles.backBtnSection}>
			<NavLink to={"/"} className={styles.backBtn}>
				Retourner sur le site
			</NavLink>
		</section>
	);
};

export default BackButton;
