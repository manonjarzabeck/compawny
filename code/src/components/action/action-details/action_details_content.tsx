import React from "react";
import type { ActionDetailsContentProps } from "../../../models/props/action_details_content_props";

// récupération de la props data envoyée par le parent
const ActionDetailsContent = ({ data }: ActionDetailsContentProps) => {
	return (
		<section>
			<h2> {data.name}</h2>
			<img src={`/img/action/${data.image}`} alt={data.name} />
			<p> {data.description}</p>
			<div>
				{" "}
				{data.asso.name} <br />
				{data.asso.description} <br />
				{data.asso.address} <br />
				{data.asso.siteweb} <br />
			</div>
		</section>
	);
};

export default ActionDetailsContent;
