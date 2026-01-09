import React from "react";
import { NavLink } from "react-router";
import type { ActionListItemProps } from "../../models/props/action_list_item_props";

const ActionListItem = ({ data }: ActionListItemProps) => {
	return (
		<article>
			<h2>
				<NavLink to={`/actions/${data.id}`}>{data.name}</NavLink>
			</h2>
			<div> {data.description}</div>
		</article>
	);
};

export default ActionListItem;
