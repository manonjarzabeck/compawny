import { NavLink } from "react-router";
import type { AssociationListItemProps } from "../../../models/props/list_item/association_list_item_props";
import Btn from "../../btn/Btn";
import style from "./association_list_item.module.css";

const AssociationListItem = ({ data }: AssociationListItemProps) => {
	return (
		<article className={style.card}>
			<div className={style.cardInner}>
				<div className={style.imageWrapper}>
					<img src={`/img/association/${data.image}`} alt={data.name} />
				</div>
				<h2 className={style.title}>{data.name}</h2>
				<p className={style.introduction}>{data.introduction}</p>
				<p className={style.country}>📍 {data.country.name}</p>
				<Btn link={`/associations/${data.id}`}>En savoir plus 🤎</Btn>
			</div>
		</article>
	);
};

export default AssociationListItem;
