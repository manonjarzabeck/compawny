"use client";

import { useState } from "react";
import { NavLink } from "react-router";

import styles from "../assets/css/navbar.module.css";

const NavBar = () => {
	// créer un état hook useState
	// const navMobileIsVisible:boolean = false;
	const [NavMobileIsVisible, setNavMobileIsVisible] = useState<boolean>(false);

	// gestionnaire d'évènement
	const handleClick = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		setNavMobileIsVisible(!NavMobileIsVisible);
		// console.log(NavMobileIsVisible);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<NavLink to={"/"}>Compawny</NavLink>
				<NavLink to={"/connexion"}>Connexion</NavLink>
			</nav>

			{/* // évènement clic */}
			<button type="button" onClick={handleClick}>
				btn
			</button>
		</>
	);
};

export default NavBar;
