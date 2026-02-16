import React, { use } from "react";
import { NavLink } from "react-router";
import ActionApiService from "../../../../services/action_api_service";
import styles from "./action_homepage.module.css";

const AdminActionHomepage = () => {
	const actions = use(new ActionApiService().selectAll()).data;

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Gérer les actions</h2>
			<NavLink
				className={`${styles.btn} ${styles.btnAdd}`}
				to={"/admin/action-form"}
			>
				Ajouter
			</NavLink>

			<div className={styles.actionsList}>
				{actions?.map((item) => {
					return (
						<div className={styles.actionCard} key={item.id}>
							<p className={styles.actionCardName}>{item.name}</p>
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
					);
				})}
			</div>
		</section>
	);
};

export default AdminActionHomepage;
