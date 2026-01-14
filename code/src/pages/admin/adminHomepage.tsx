import React, { use } from "react";
import { NavLink } from "react-router";
import ActionApiService from "../../services/action_api_service";
import styles from "./adminHomepage.module.css";

const adminHomepage = () => {
	const actions = use(new ActionApiService().selectAll()).data;

	return (
		<section>
			<h2>Gérer les actions</h2>
			<NavLink className={styles.btnAdd} to={"/admin/action-form"}>
				Ajouter
			</NavLink>

			<div className={styles.actionsList}>
				{actions?.map((item) => {
					return (
						<div className={styles.actionCard} key={item.id}>
							<p className={styles.actionCardName}>{item.name}</p>
							<p className={styles.buttons}>
								<NavLink
									className={styles.btnEdit}
									to={`/admin/action-form/${item.id}`}
								>
									Modifier
								</NavLink>
								<NavLink
									className={styles.btnDelete}
									to={`/admin/action-form-delete/${item.id}`}
								>
									Supprimer
								</NavLink>
							</p>
						</div>
					);
				})}
			</div>
		</section>
		// <section>
		// 	<h2>Gérer les actions</h2>
		// 	<NavLink to={"/admin/action-form"}>Ajouter</NavLink>
		// 	{actions?.map((item) => {
		// 		return (
		// 			<div key={item.id}>
		// 				<p>{item.name}</p>
		// 				<p>
		// 					<NavLink to={`/admin/action-form/${item.id}`}>Modifier</NavLink>
		// 					<NavLink to={``}>Supprimer</NavLink>
		// 				</p>
		// 			</div>
		// 		);
		// 	})}
		// </section>
	);
};

export default adminHomepage;
