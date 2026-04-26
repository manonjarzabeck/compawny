"use client";

import React from "react";
import { NavLink } from "react-router";
import type { BtnProps } from "../../models/props/btn_props";
import styles from "./Btn.module.css";

const Btn = ({ link, onClick, children, variant = "default" }: BtnProps) => {
	return (
		<section className={styles.BtnSection}>
			{/* 
			=====================================================
			CAS 1 : BOUTON AVEC ACTION (onClick)
			→ utilisé pour les actions (submit, delete, etc.)
			=====================================================
			*/}
			{
				onClick ? (
					<button
						type="button"
						onClick={onClick}
						className={`${styles.Btn} ${styles[variant]}`}
					>
						{children}
					</button>
				) : link ? (
					/* 
				=====================================================
				CAS 2 : BOUTON AVEC NAVIGATION
				→ utilisé pour changer de page (React Router)
				=====================================================
				*/
					<NavLink to={link} className={`${styles.Btn} ${styles[variant]}`}>
						{children}
					</NavLink>
				) : null /* aucun comportement si rien n’est fourni */
			}
		</section>
	);
};

export default Btn;
