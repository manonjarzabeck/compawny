import type { PageAdoptionsProps } from "../../../models/props/pages/page_adoptions_props";
import AdoptionListItem from "../adoption-list-item/adoption_list_item";
import style from "./adoption_list.module.css";

/* 
=====================================================
 ADOPTION LIST (LISTE DES ADOPTIONS)
→ composant chargé d’afficher la liste des animaux

- reçoit la liste des adoptions (déjà filtrées)
- parcourt les données avec map()
- délègue l’affichage de chaque élément à AdoptionListItem

👉 rôle : afficher une collection d’éléments
=====================================================
*/

const AdoptionList = ({ adoptions }: PageAdoptionsProps) => {
	return (
		<section className={style.grid}>
			{/* 
			Parcours de la liste des adoptions :
			chaque animal est rendu via un composant dédié
			*/}
			{adoptions.map((animal) => (
				<AdoptionListItem key={animal.id} data={animal} />
			))}
		</section>
	);
};

export default AdoptionList;
