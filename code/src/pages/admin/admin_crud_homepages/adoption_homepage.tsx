import React, { use } from "react";
import { NavLink } from "react-router";
import Btn from "../../../components/btn/Btn";
import AdoptionApiService from "../../../services/adoption_api_service";
import styles from "./admin_homepage.module.css";

const AdminAdoptionHomepage = () => {
	// Récupère toutes les adoptions pour les afficher dans la liste admin
	const adoptions = use(new AdoptionApiService().selectAll()).data;

	return (
		<section className={styles.container}>
			{/* Bouton de retour vers le tableau de bord admin */}
			<div className={styles.backButtonRow}>
				<Btn link="/admin">Revenir au tableau de bord</Btn>
			</div>

			{/* En-tête de la page : titre, texte explicatif et bouton d’ajout */}
			<div className={styles.headerContent}>
				<div className={styles.headerIntro}>
					<h2 className={styles.title}>Gérer les adoptions SOS</h2>
					<p className={styles.subtitle}>
						Sur cette page vous pouvez ajouter, modifier ou supprimer les
						profils d’animaux proposés à l’adoption sur le site.
					</p>
				</div>

				<NavLink
					className={`${styles.btn} ${styles.btnAdd}`}
					to={"/admin/adoption-form"}
				>
					Ajouter une adoption
				</NavLink>
			</div>

			{/* Liste des cartes d’adoptions */}
			<div className={styles.List}>
				{adoptions?.map((item) => {
					return (
						<div className={styles.Card} key={item.id}>
							<p className={styles.CardName}>{item.name}</p>
							<div className={styles.cardContent}>
								<img src={`/img/adoption/${item.image}`} alt={item.name} />

								<div className={styles.buttons}>
									<NavLink
										className={`${styles.btn} ${styles.btnEdit}`}
										to={`/admin/adoption-form/${item.id}`}
									>
										Modifier
									</NavLink>

									<NavLink
										className={`${styles.btn} ${styles.btnDelete}`}
										to={`/admin/adoption-form-delete/${item.id}`}
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

export default AdminAdoptionHomepage;
