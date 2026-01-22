"use client";

// import { useState } from "react";
import { NavLink } from "react-router";

import styles from "../navigation/navigation.module.css";

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<NavLink to={"/"} className={styles.navLink}>
				Le guide du bénévole 👉🏼
			</NavLink>
			<NavLink to={"/contact"} className={styles.navLink}>
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
