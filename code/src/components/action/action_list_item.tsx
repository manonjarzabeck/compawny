import React from "react";
import type { ActionListItemProps } from "../../models/props/action_list_item_props";

const ActionListItem = ({ data }: ActionListItemProps) => {
	return (
		<article>
			<h2>{data.name}</h2>
			<p>
				{/* / cible le dossier public */}
				<img src="/img/action/" alt="" />
			</p>
			<div> {data.description}</div>
		</article>
	);
};

export default ActionListItem;
