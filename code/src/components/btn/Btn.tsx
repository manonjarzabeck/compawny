"use client";

import React from "react";
import { NavLink } from "react-router";
import type { BtnProps } from "../../models/props/btn_props";
import styles from "./Btn.module.css";

const Btn = ({ link, children }: BtnProps) => {
	return (
		<section className={styles.BtnSection}>
			<NavLink to={link} className={styles.Btn}>
				{children}
			</NavLink>
		</section>
	);
};

export default Btn;
