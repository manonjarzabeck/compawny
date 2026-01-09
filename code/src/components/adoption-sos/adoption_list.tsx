import { use } from "react";
import type { Animal } from "../../../models/animal";
import type { ApiResponse } from "../../models/api_response";
import AdoptionApiService from "../../services/animal_api_service";
import AdoptionListItem from "./adoption_list_item";

const AdoptionList = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
	const results = use<ApiResponse<Animal[]>>(
		new AdoptionApiService().selectAll(),
	);
	return (
		<section>
			{results.data?.map((item) => (
				// item est passé en props
				<AdoptionListItem key={item.id} data={item} />
			))}
		</section>
	);
};

export default AdoptionList;
