import { NavLink } from "react-router";
import type { AssoListItemProps } from "../../models/props/asso_list_item_props";

const AssoListItem = ({ data }: AssoListItemProps) => {
	return (
		<article>
			<h2>
				<NavLink to={`/asso/${data.id}`}>{data.name}</NavLink>
			</h2>
			<div> {data.description}</div>
		</article>
	);
};

export default AssoListItem;
