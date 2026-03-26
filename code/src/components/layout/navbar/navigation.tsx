"use client";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import styles from "./navigation.module.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<nav className={`${styles.navbar} ${isOpen ? styles.navOpen : ""}`}>
			<button type="button" className={styles.navLink} onClick={toggleDropdown}>
				Le guide du bénévole {isOpen ? "👈🏼" : "👉🏼"}
			</button>

			<div
				className={`${styles.dropdownInline} ${
					isOpen ? styles.open : styles.closed
				}`}
			>
				<NavLink
					to="/actions"
					className={styles.dropdownLink}
					onClick={closeDropdown}
				>
					Découvrir les actions locales ❣️
				</NavLink>

				<NavLink
					to="/associations"
					className={styles.dropdownLink}
					onClick={closeDropdown}
				>
					Explorer les associations 🌎
				</NavLink>

				<NavLink
					to="/adoptions"
					className={styles.dropdownLink}
					onClick={closeDropdown}
				>
					Voir les animaux à l’adoption 🐾
				</NavLink>
			</div>

			<NavLink to="/contact" className={styles.navLink} onClick={closeDropdown}>
				Ils en parlent 💭
			</NavLink>
		</nav>
	);
};

export default NavBar;

// créer un état hook useState
// const navMobileIsVisible:boolean = false;
// const [NavMobileIsVisible, setNavMobileIsVisible] = useState<boolean>(false);

// gestionnaire d'évènement
// const handleClick = () => {
// 	// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
// 	setNavMobileIsVisible(!NavMobileIsVisible);
// 	// console.log(NavMobileIsVisible);
// };
