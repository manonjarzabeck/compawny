import React, { use } from "react";
import { NavLink } from "react-router";
import Btn from "../../../components/btn/Btn";
import AssociationApiService from "../../../services/association_api_service";
import styles from "./admin_homepage.module.css";

const AdminAssociationHomepage = () => {
	// Récupère toutes les associations pour les afficher dans la liste admin
	const associations = use(new AssociationApiService().selectAll()).data;

	return (
		<section className={styles.container}>
			{/* Bouton de retour vers le tableau de bord admin */}
			<div className={styles.backButtonRow}>
				<Btn link="/admin">Revenir au tableau de bord</Btn>
			</div>

			{/* En-tête de la page : titre, texte explicatif et bouton d’ajout */}
			<div className={styles.headerContent}>
				<div className={styles.headerIntro}>
					<h2 className={styles.title}>Gérer les associations</h2>
					<p className={styles.subtitle}>
						Sur cette page vous pouvez ajouter, modifier ou supprimer les
						associations visibles sur le site, ainsi que mettre à jour leurs
						informations.
					</p>
				</div>

				<NavLink
					className={`${styles.btn} ${styles.btnAdd}`}
					to={"/admin/association-form"}
				>
					Ajouter une association
				</NavLink>
			</div>

			{/* Liste des cartes d’associations */}
			<div className={styles.List}>
				{associations?.map((item) => {
					return (
						<div className={styles.Card} key={item.id}>
							<p className={styles.CardName}>{item.name}</p>
							<div className={styles.cardContent}>
								<img src={`/img/association/${item.image}`} alt={item.name} />

								<div className={styles.buttons}>
									<NavLink
										className={`${styles.btn} ${styles.btnEdit}`}
										to={`/admin/association-form/${item.id}`}
									>
										Modifier
									</NavLink>

									<NavLink
										className={`${styles.btn} ${styles.btnDelete}`}
										to={`/admin/association-form-delete/${item.id}`}
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

export default AdminAssociationHomepage;
