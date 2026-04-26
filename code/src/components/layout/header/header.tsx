"use client";

import { NavLink } from "react-router";
import SecurityService from "../../../services/security_service";
import Btn from "../../btn/Btn";
import NavBar from "../navbar/navigation";
import styles from "./header.module.css";

const Header = () => {
	// Récupération de l'utilisateur connecté
	const user = new SecurityService().getUser();

	// Si l'utilisateur est connecté :
	// → le bouton "Mon espace personnel" redirige vers l'espace utilisateur
	// Sinon :
	// → il redirige vers la page d'authentification
	const personalLink = user ? "/espace-utilisateur" : "/authentification";

	// Définition du texte du bouton selon l'état de connexion
	const personalLabel = user
		? "Mon espace personnel 👤"
		: "Connexion / Inscription";

	return (
		/* Header public affiché sur tout le site côté visiteur */
		<header className={styles.publicHeader}>
			{/* 
				Conteneur interne du header
				→ contient le logo/titre, la navigation et le bouton CTA desktop
			*/}
			<div className={styles.headerInner}>
				{/* Bloc marque / identité visuelle */}
				<div className={styles.publicBrand}>
					{/* Le logo + le titre ramènent à l'accueil */}
					<NavLink to="/" className={styles.logoLink}>
						<img
							src="/img/icons_logo/Compawny.png"
							alt="Logo Compawny"
							className={styles.publicLogo}
						/>
						<h1 className={styles.publicTitle}>Compawny</h1>
					</NavLink>
				</div>

				{/* 
					Zone centrale du header :
					→ contient la barre de navigation
					→ sur desktop : navigation classique
					→ sur mobile/tablette : menu burger
				*/}
				<div className={styles.navWrapper}>
					<NavBar personalLink={personalLink} personalLabel={personalLabel} />
				</div>

				{/* 
					Bouton affiché uniquement sur desktop
					Sur mobile/tablette, ce lien est déjà présent dans le menu burger
				*/}
				<div className={styles.desktopCta}>
					<Btn link={personalLink}>{personalLabel}</Btn>
				</div>
			</div>
		</header>
	);
};

export default Header;
