import React from "react";
import type { ActionListItemProps } from "../../../models/props/list_item/action_list_item_props";
import Btn from "../../btn/Btn";
import style from "./action_list_item.module.css";

const ActionListItem = ({ data }: ActionListItemProps) => {
	return (
		<article className={style.card}>
			<div className={style.cardInner}>
				<div className={style.imageWrapper}>
					<img src={`/img/action/${data.image}`} alt={data.name} />
				</div>
				<h2 className={style.title}>{data.name}</h2>
				<p className={style.description}>{data.association.name}</p>
				<p className={style.departement}>
					📍 {data.association.department.name}
				</p>

				<Btn link={`/actions/${data.id}`}>En savoir plus 🤎</Btn>
			</div>
		</article>
	);
};

export default ActionListItem;
