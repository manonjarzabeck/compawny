import React, { use } from "react";
import { NavLink } from "react-router";
import Btn from "../../../components/btn/Btn";
import AssociationApiService from "../../../services/association_api_service";
import styles from "./admin_homepage.module.css";

const AdminAssociationHomepage = () => {
	const associations = use(new AssociationApiService().selectAll()).data;

	return (
		<section className={styles.container}>
			<Btn link="/admin">Revenir au tableau de bord</Btn>
			<h2 className={styles.title}>Gérer les associations</h2>
			<NavLink
				className={`${styles.btn} ${styles.btnAdd}`}
				to={"/admin/association-form"}
			>
				Ajouter
			</NavLink>

			<div className={styles.List}>
				{associations?.map((item) => {
					return (
						<div className={styles.Card} key={item.id}>
							<p className={styles.CardName}>{item.name}</p>
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
					);
				})}
			</div>
		</section>
	);
};

export default AdminAssociationHomepage;
