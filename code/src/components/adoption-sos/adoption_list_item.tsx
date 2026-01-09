import { NavLink } from "react-router";
import type { AdoptionListItemProps } from "../../models/props/adoption_list_item_props";

const AdoptionListItem = ({ data }: AdoptionListItemProps) => {
	return (
		<article>
			<h2>
				<NavLink to={`/animal/${data.id}`}>{data.name}</NavLink>
			</h2>
			<div> {data.description}</div>
		</article>
	);
};

export default AdoptionListItem;
