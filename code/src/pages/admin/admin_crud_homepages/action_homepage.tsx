import React, { use } from "react";
import { NavLink } from "react-router";
import AdminFlashMessage from "../../../components/admin/admin-flash-msg/admin-flash-msg";
import Btn from "../../../components/btn/Btn";
import ActionApiService from "../../../services/action_api_service";
import styles from "./admin_homepage.module.css";

const AdminActionHomepage = () => {
	const actions = use(new ActionApiService().selectAll()).data;

	return (
		<>
			<Btn link="/admin">Revenir au tableau de bord</Btn>
			<section className={styles.container}>
				<h2 className={styles.title}>Gérer les actions</h2>
				<AdminFlashMessage />
				<NavLink
					className={`${styles.btn} ${styles.btnAdd}`}
					to={"/admin/action-form"}
				>
					Ajouter
				</NavLink>

				<div className={styles.List}>
					{actions?.map((item) => {
						return (
							<div className={styles.Card} key={item.id}>
								<p className={styles.CardName}>{item.name}</p>
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
		</>
	);
};

export default AdminActionHomepage;
