import { NavLink } from "react-router";
import type { AssociationListItemProps } from "../../../models/props/list_item/association_list_item_props";
import Btn from "../../btn/Btn";
import style from "./association_list_item.module.css";

/* 
=====================================================
 ASSOCIATION LIST ITEM (CARTE ASSOCIATION)
→ représente une association individuelle

- affiche les informations principales :
  image, nom, introduction, pays
- propose un bouton vers la fiche détail

👉 rôle : composant UI (affichage uniquement)
=====================================================
*/

const AssociationListItem = ({ data }: AssociationListItemProps) => {
	return (
		<article className={style.card}>
			<div className={style.cardInner}>
				{/* 
				=====================================================
				IMAGE DE L’ASSOCIATION
				→ affichée depuis le dossier public
				→ alt = nom pour accessibilité
				=====================================================
				*/}
				<div className={style.imageWrapper}>
					<img src={`/img/association/${data.image}`} alt={data.name} />
				</div>

				{/* Nom de l’association */}
				<h2 className={style.title}>{data.name}</h2>

				{/* Courte description / introduction */}
				<p className={style.introduction}>{data.introduction}</p>

				{/* Pays de l’association */}
				<p className={style.country}>📍 {data.country.name}</p>

				{/* 
				Bouton vers la fiche détail
				→ navigation dynamique avec l’id
				*/}
				<Btn link={`/associations/${data.id}`}>En savoir plus 🤎</Btn>
			</div>
		</article>
	);
};

export default AssociationListItem;
