import React, { use } from "react";
import { NavLink } from "react-router";
import Btn from "../../../components/btn/Btn";
import FlashMessage from "../../../components/flash-msg/flash-msg";
import ActionApiService from "../../../services/action_api_service";
import styles from "./admin_homepage.module.css";

const AdminActionHomepage = () => {
	// Récupère toutes les actions pour les afficher dans la liste d’administration
	const actions = use(new ActionApiService().selectAll()).data;

	return (
		<section className={styles.container}>
			{/* Bouton de retour vers le tableau de bord admin */}
			<div className={styles.backButtonRow}>
				<Btn link="/admin">Revenir au tableau de bord</Btn>
			</div>

			{/* En-tête de la page : titre, texte d’introduction et bouton d’ajout */}
			<div className={styles.headerContent}>
				<div className={styles.headerIntro}>
					<h2 className={styles.title}>Gestion des actions</h2>
					<p className={styles.subtitle}>
						Sur cette page vous pouvez ajouter, modifier ou supprimer les
						actions affichées sur le site, ainsi que mettre à jour leur contenu.
					</p>
				</div>

				<NavLink
					className={`${styles.btn} ${styles.btnAdd}`}
					to={"/admin/action-form"}
				>
					Ajouter une action
				</NavLink>
			</div>

			{/* Message flash affiché après une action d’administration */}
			<FlashMessage />

			{/* Liste des cartes d’actions */}
			<div className={styles.List}>
				{actions?.map((item) => {
					return (
						<div className={styles.Card} key={item.id}>
							<p className={styles.CardName}>{item.name}</p>
							<div className={styles.cardContent}>
								<img src={`/img/action/${item.image}`} alt={item.name} />

								<div className={styles.buttons}>
									<NavLink
										className={`${styles.btn} ${styles.btnEdit}`}
										to={`/admin/action-form/${item.id}`}
									>
										Modifier
									</NavLink>

									<NavLink
										className={`${styles.btn} ${styles.btnDelete}`}
										to={`/admin/action-form-delete/${item.id}`}
									>
										Supprimer
									</NavLink>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default AdminActionHomepage;
