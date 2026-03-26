import type { PageAdoptionsProps } from "../../../models/props/pages/page_adoptions_props";
import AdoptionListItem from "../adoption-list-item/adoption_list_item";
import style from "./adoption_list.module.css";

const AdoptionList = ({ adoptions }: PageAdoptionsProps) => {
	return (
		<section className={style.grid}>
			{adoptions.map((animal) => (
				<AdoptionListItem key={animal.id} data={animal} />
			))}
		</section>
	);
};

export default AdoptionList;
