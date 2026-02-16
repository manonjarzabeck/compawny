import type { AssociationDetailsContentProps } from "../../../models/props/association_details_content_props";

// récupération de la props data envoyée par le parent
const AssociationDetailsContent = ({
	data,
}: AssociationDetailsContentProps) => {
	return (
		<section>
			<h2> {data.name}</h2>
			<img src={`/img/association/${data.image}`} alt={data.name} />
			<p> {data.description}</p>
		</section>
	);
};

export default AssociationDetailsContent;
