"use client";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import styles from "./navigation.module.css";

type NavBarProps = {
	personalLink: string;
};

const NavBar = ({ personalLink }: NavBarProps) => {
	// Gère l'ouverture / fermeture du "guide du bénévole" sur desktop
	const [isGuideOpen, setIsGuideOpen] = useState(false);

	// Gère l'ouverture / fermeture du menu burger sur mobile
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Permet de détecter le changement de route/page
	const location = useLocation();

	// Ouvre ou ferme le menu déroulant du guide en desktop
	const toggleGuideDropdown = () => {
		setIsGuideOpen((prev) => !prev);
	};

	// Ouvre ou ferme le menu burger mobile
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	// Ferme tous les menus
	const closeMenus = () => {
		setIsGuideOpen(false);
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		// À chaque changement de page, on referme les menus
		// → évite qu'un menu reste ouvert après navigation
		closeMenus();
	}, [location]);

	return (
		/* Navigation principale du site */
		<nav className={styles.navbar} aria-label="Navigation principale">
			{/* ===================== DESKTOP ===================== */}
			<div
				className={`${styles.desktopNav} ${
					isGuideOpen ? styles.desktopNavOpen : styles.desktopNavClosed
				}`}
			>
				{/* 
          Bouton qui ouvre / ferme les liens du guide du bénévole
          uniquement en version desktop
        */}
				<button
					type="button"
					className={styles.navLink}
					onClick={toggleGuideDropdown}
					aria-expanded={isGuideOpen}
				>
					Le guide du bénévole {isGuideOpen ? "👈🏼" : "👉🏼"}
				</button>

				{/* 
          Bloc déroulant inline :
          les liens apparaissent au milieu de la navigation
          quand le guide est ouvert
        */}
				<div
					className={`${styles.dropdownInline} ${
						isGuideOpen ? styles.open : styles.closed
					}`}
				>
					<NavLink
						to="/actions"
						className={styles.dropdownLink}
						onClick={closeMenus}
						title="Découvrir les actions locales"
					>
						Actions locales ❣️
					</NavLink>

					<NavLink
						to="/associations"
						className={styles.dropdownLink}
						onClick={closeMenus}
						title="Explorer les associations internationales"
					>
						Associations 🌎
					</NavLink>

					<NavLink
						to="/adoptions"
						className={styles.dropdownLink}
						onClick={closeMenus}
						title="Voir les animaux SOS à adopter"
					>
						Animaux à l’adoption 🐾
					</NavLink>
				</div>

				{/* Lien principal visible en desktop */}
				<NavLink to="/contact" className={styles.navLink} onClick={closeMenus}>
					Ils en parlent 💭
				</NavLink>
			</div>

			{/* ===================== MOBILE / TABLETTE ===================== */}
			<div className={styles.mobileNav}>
				{/* 
          Bouton burger :
          ouvre ou ferme le panneau mobile
        */}
				<button
					type="button"
					className={styles.mobileMenuButton}
					onClick={toggleMobileMenu}
					aria-expanded={isMobileMenuOpen}
					aria-label="Ouvrir ou fermer le menu"
				>
					{isMobileMenuOpen ? "✕" : "☰"}
				</button>

				{/* 
          Panneau du menu mobile
          affiché uniquement quand isMobileMenuOpen = true
        */}
				{isMobileMenuOpen && (
					<div className={styles.mobilePanel}>
						{/* Bloc "guide du bénévole" version mobile */}
						<div className={styles.mobileGuideBlock}>
							<p className={styles.mobileGuideTitle}>Le guide du bénévole</p>

							<div className={styles.mobileGuideLinks}>
								<NavLink
									to="/actions"
									className={styles.mobileSubLink}
									onClick={closeMenus}
								>
									Découvrir les actions locales ❣️
								</NavLink>

								<NavLink
									to="/associations"
									className={styles.mobileSubLink}
									onClick={closeMenus}
								>
									Explorer les associations 🌎
								</NavLink>

								<NavLink
									to="/adoptions"
									className={styles.mobileSubLink}
									onClick={closeMenus}
								>
									Voir les animaux à l’adoption 🐾
								</NavLink>
							</div>
						</div>

						{/* Liens principaux du menu mobile */}
						<NavLink
							to="/contact"
							className={styles.mobileMainLink}
							onClick={closeMenus}
						>
							Ils en parlent 💭
						</NavLink>

						<NavLink
							to={personalLink}
							className={styles.mobileMainLink}
							onClick={closeMenus}
						>
							Mon espace personnel 👤
						</NavLink>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
