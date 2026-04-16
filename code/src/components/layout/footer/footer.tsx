"use client";

import { NavLink } from "react-router";
import SecurityService from "../../../services/security_service";
import styles from "../footer/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			{/* Nom du site */}
			<div className={styles.brand}>Ⓒ Compawny -</div>

			{/* Lien vers les mentions légales */}
			<NavLink to={"/mentions"} className={styles.legal}>
				Mentions légales
			</NavLink>

			{
				// Affichage du lien admin uniquement si l'utilisateur connecté est admin
				new SecurityService().getUser()?.role.name === "admin" ? (
					<>
						<span>-</span>
						<NavLink to={"/admin"} className={styles.legal}>
							Espace Admin 🔐
						</NavLink>
					</>
				) : (
					<></>
				)
			}
		</footer>
	);
};

export default Footer;
