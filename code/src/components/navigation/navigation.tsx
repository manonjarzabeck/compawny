"use client";

// import { useState } from "react";
import { NavLink } from "react-router";

import styles from "../navigation/navigation.module.css";

const NavBar = () => {
	// créer un état hook useState
	// const navMobileIsVisible:boolean = false;
	// const [NavMobileIsVisible, setNavMobileIsVisible] = useState<boolean>(false);

	// gestionnaire d'évènement
	// const handleClick = () => {
	// 	// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
	// 	setNavMobileIsVisible(!NavMobileIsVisible);
	// 	// console.log(NavMobileIsVisible);
	// };

	return (
		<nav className={styles.navbar}>
			<NavLink to={"/"}>Le guide du bénévole 👉🏼</NavLink>
			<NavLink to={"/contact"}>Ils en parlent 💭</NavLink>
			<NavLink to={"/action"}>Voir les actions 🐈</NavLink>
			<NavLink to={"/authentification"}>Connexion/Inscription 👤</NavLink>
			<NavLink to={"/admin"}>Espace Admin 🔐</NavLink>
		</nav>
	);
};

export default NavBar;
