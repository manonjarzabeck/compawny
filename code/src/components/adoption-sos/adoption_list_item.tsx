import { NavLink } from "react-router";
import type { AdoptionListItemProps } from "../../models/props/adoption_list_item_props";
import Btn from "../btn/Btn";
import style from "./adoption_list_item.module.css";

const AdoptionListItem = ({ data }: AdoptionListItemProps) => {
	return (
		<article className={style.card}>
			<div className={style.cardInner}>
				<div className={style.imageWrapper}>
					<img src={`/img/adoption/${data.image}`} alt={data.name} />
				</div>
				<h2 className={style.title}>{data.name}</h2>

				<Btn link={`/adoptions/${data.id}`}>Je veux l'adopter 🤎</Btn>
			</div>
		</article>
	);
};

export default AdoptionListItem;
