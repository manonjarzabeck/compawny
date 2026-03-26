import React, { use } from "react";
import { NavLink } from "react-router";

import styles from "../../../assets/css/admin_homepage.module.css";
import AdoptionApiService from "../../../services/adoption_api_service";

const AdminAdoptionHomepage = () => {
	const adoptions = use(new AdoptionApiService().selectAll()).data;

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Gérer les adoptions SOS</h2>
			<NavLink
				className={`${styles.btn} ${styles.btnAdd}`}
				to={"/admin/adoption-form"}
			>
				Ajouter
			</NavLink>

			<div className={styles.actionsList}>
				{adoptions?.map((item) => {
					return (
						<div className={styles.actionCard} key={item.id}>
							<p className={styles.actionCardName}>{item.name}</p>
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
					);
				})}
			</div>
		</section>
	);
};

export default AdminAdoptionHomepage;
