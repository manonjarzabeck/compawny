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
			<NavLink to={"/"} className={styles.navLink}>
				Le guide du bénévole 👉🏼
			</NavLink>
			<NavLink to={"/contact"} className={styles.navLink}>
				Ils en parlent 💭
			</NavLink>
			<NavLink to={"/action"} className={styles.navLink}>
				Voir les actions 🐈
			</NavLink>
			<NavLink to={"/asso"} className={styles.navLink}>
				Voir les associations 🌍
			</NavLink>
			<NavLink to={"/animal"} className={styles.navLink}>
				Voir les animaux SOS à l'adoption 🐶
			</NavLink>
			<NavLink to={"/authentification"} className={styles.navLink}>
				Connexion/Inscription 👤
			</NavLink>
			<NavLink to={"/admin"} className={styles.navLink}>
				Espace Admin 🔐
			</NavLink>
		</nav>
	);
};

export default NavBar;
