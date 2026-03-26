"use client";

import { NavLink } from "react-router";
import SecurityService from "../../../services/security_service";
import Btn from "../../btn/Btn";
import NavBar from "../navbar/navigation";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.publicHeader}>
			{/* {JSON.stringify(new SecurityService().getUser())} */}
			<div className={styles.headerInner}>
				<div className={styles.publicBrand}>
					<NavLink to="/" className={styles.logoLink}>
						<img
							src="/img/icons_logo/Compawny.png"
							alt="Logo Compawny"
							className={styles.publicLogo}
						/>
						<h1 className={styles.publicTitle}>Compawny</h1>
					</NavLink>
				</div>

				<div className={styles.navWrapper}>
					<NavBar />
				</div>

				{
					// si l'utilisateur est connecté

					new SecurityService().getUser() ? (
						<Btn link="/espace-utilisateur">Mon espace personnel 👤</Btn>
					) : (
						<div className={styles.ctaWrapper}>
							<Btn link="/authentification">Mon espace personnel 👤</Btn>
						</div>
					)
				}
			</div>
		</header>
	);
};

export default Header;
