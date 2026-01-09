import { use } from "react";
import type { Asso } from "../../../models/asso";
import type { ApiResponse } from "../../models/api_response";
import AssoApiService from "../../services/asso_api_service";
import AssoListItem from "./asso_list_item";

const AssoList = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
	const results = use<ApiResponse<Asso[]>>(new AssoApiService().selectAll());
	return (
		<section>
			{results.data?.map((item) => (
				// item est passé en props
				<AssoListItem key={item.id} data={item} />
			))}
		</section>
	);
};

export default AssoList;
