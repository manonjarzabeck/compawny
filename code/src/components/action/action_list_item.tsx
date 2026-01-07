import React from "react";
import { NavLink } from "react-router";
import type { ActionListItemProps } from "../../models/props/action_list_item_props";

const ActionListItem = ({ data }: ActionListItemProps) => {
	return (
		<article>
			<h2>
				{data.name}
				<NavLink to={`/actions/${data.id}`}>Voir</NavLink>
			</h2>

			<p>
				{/* / cible le dossier public */}
				<img src="" alt="" />
			</p>
			<div> {data.description}</div>
		</article>
	);
};

export default ActionListItem;
