import type { AdoptionDetailsContentProps } from "../../../models/props/adoption_details_content_props";

// récupération de la props data envoyée par le parent
const AdoptionDetailsContent = ({ data }: AdoptionDetailsContentProps) => {
	return (
		<section>
			<h2> {data.name}</h2>
			<img src={`/img/adoption/${data.image}`} alt={data.name} />
			<p> {data.description}</p>
		</section>
	);
};

export default AdoptionDetailsContent;
