import React from "react";
import type { FilterActionsProps } from "../../../models/props/filtre/filtered_actions_props";
import ActionListItem from ".././/action-list-item/action_list_item";
import style from "./action_list.module.css";

const ActionList = ({ actions }: FilterActionsProps) => {
	return (
		<section className={style.grid}>
			{actions
				.filter((item) => item.is_active)
				.map((item) => (
					<ActionListItem key={item.id} data={item} />
				))}
		</section>
	);
};

export default ActionList;
