"use client";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import styles from "./navigation.module.css";

type NavBarProps = {
	personalLink: string;
};

const NavBar = ({ personalLink }: NavBarProps) => {
	const [isGuideOpen, setIsGuideOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const toggleGuideDropdown = () => {
		setIsGuideOpen((prev) => !prev);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const closeMenus = () => {
		setIsGuideOpen(false);
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		closeMenus();
	}, [location]);

	return (
		<nav className={styles.navbar} aria-label="Navigation principale">
			<div className={styles.desktopNav}>
				<button
					type="button"
					className={styles.navLink}
					onClick={toggleGuideDropdown}
					aria-expanded={isGuideOpen}
				>
					Le guide du bénévole {isGuideOpen ? "👈🏼" : "👉🏼"}
				</button>

				<div
					className={`${styles.dropdownInline} ${
						isGuideOpen ? styles.open : styles.closed
					}`}
				>
					<NavLink
						to="/actions"
						className={styles.dropdownLink}
						onClick={closeMenus}
					>
						Découvrir les actions locales ❣️
					</NavLink>

					<NavLink
						to="/associations"
						className={styles.dropdownLink}
						onClick={closeMenus}
					>
						Explorer les associations 🌎
					</NavLink>

					<NavLink
						to="/adoptions"
						className={styles.dropdownLink}
						onClick={closeMenus}
					>
						Voir les animaux à l’adoption 🐾
					</NavLink>
				</div>

				<NavLink to="/contact" className={styles.navLink} onClick={closeMenus}>
					Ils en parlent 💭
				</NavLink>
			</div>

			<div className={styles.mobileNav}>
				<button
					type="button"
					className={styles.mobileMenuButton}
					onClick={toggleMobileMenu}
					aria-expanded={isMobileMenuOpen}
					aria-label="Ouvrir ou fermer le menu"
				>
					{isMobileMenuOpen ? "✕" : "☰"}
				</button>

				{isMobileMenuOpen && (
					<div className={styles.mobilePanel}>
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
