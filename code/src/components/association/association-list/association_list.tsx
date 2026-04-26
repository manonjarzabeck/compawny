import { use } from "react";
import type { Association } from "../../../../models/association";
import type { ApiResponse } from "../../../models/api_response";
import AssociationApiService from "../../../services/association_api_service";
import AssociationListItem from "../association-list-item/association_list_item";
import style from "./association_list.module.css";

/* 
=====================================================
 ASSOCIATION LIST (LISTE DES ASSOCIATIONS)
→ composant chargé de récupérer et afficher les associations

- récupère les données depuis l’API (côté serveur)
- filtre les associations internationales
- affiche chaque association via AssociationListItem

👉 rôle : récupérer + préparer les données + affichage liste
👉 mélange logique simple + affichage (car composant serveur)
=====================================================
*/

const AssoList = () => {
	/*
	=====================================================
	RÉCUPÉRATION DES DONNÉES
	→ use permet de résoudre une promesse directement
	  dans un composant serveur (React)
	=====================================================
	*/
	const results = use<ApiResponse<Association[]>>(
		new AssociationApiService().selectAll(),
	);

	return (
		<section className={style.grid}>
			{/* 
			Filtrage des associations :
			on ne garde que les associations internationales
			*/}
			{results.data
				?.filter((item) => item.is_international)
				.map((item) => (
					// Chaque association est passée en props au composant enfant
					<AssociationListItem key={item.id} data={item} />
				))}
		</section>
	);
};

export default AssoList;
