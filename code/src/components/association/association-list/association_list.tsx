import { use } from "react";
import type { Association } from "../../../../models/association";
import type { ApiResponse } from "../../../models/api_response";
import AssociationApiService from "../../../services/association_api_service";
import AssociationListItem from "../association-list-item/association_list_item";
import style from "./association_list.module.css";

const AssoList = () => {
	/*
	 use permet de récupérer les données d'une promesse dans un composant serveur de React
	 */
	const results = use<ApiResponse<Association[]>>(
		new AssociationApiService().selectAll(),
	);

	return (
		<section className={style.grid}>
			{results.data
				?.filter((item) => item.is_international)
				.map((item) => (
					// item est passé en props
					<AssociationListItem key={item.id} data={item} />
				))}
		</section>
	);
};

export default AssoList;
