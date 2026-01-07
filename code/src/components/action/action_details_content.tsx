import React from "react";
import type { ActionDetailsContentProps } from "../../models/props/action_details_content_props";

// récupération de la props data envoyée par le parent
const ActionDetailsContent = ({ data }: ActionDetailsContentProps) => {
	return (
		<section>
			<h2>Actions détails </h2>
			<h3> {data.name}</h3>
			<h4> {data.image}</h4>
			<h5> {data.description}</h5>
			<h6> {data.published}</h6>
		</section>
	);
};

export default ActionDetailsContent;
