"use client";

import React from "react";
import { NavLink } from "react-router";
import type { BtnProps } from "../../models/props/btn_props";
import styles from "./Btn.module.css";

const Btn = ({ link, onClick, children, variant = "default" }: BtnProps) => {
	return (
		<section className={styles.BtnSection}>
			{onClick ? (
				<button
					type="button"
					onClick={onClick}
					className={`${styles.Btn} ${styles[variant]}`}
				>
					{children}
				</button>
			) : link ? (
				<NavLink to={link} className={`${styles.Btn} ${styles[variant]}`}>
					{children}
				</NavLink>
			) : null}
		</section>
	);
};

export default Btn;
