import React from "react";
import type { ActionDetailsContentProps } from "../../../models/props/action_details_content_props";

// récupération de la props data envoyée par le parent
const ActionDetailsContent = ({ data }: ActionDetailsContentProps) => {
	return (
		<section>
			<img src={`/img/action/${data.image}`} alt={data.name} />
			<h2> {data.name}</h2>
			<p> {data.description}</p>
		</section>
	);
};

export default ActionDetailsContent;
