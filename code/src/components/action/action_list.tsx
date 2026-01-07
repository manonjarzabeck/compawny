import React, { use, useEffect, useState } from "react";
import type { Action } from "../../../models/action";
import type { ApiResponse } from "../../models/api_response";
import ActionApiService from "../../services/action_api_service";
import ActionListItem from "./action_list_item";

const ActionList = () => {
	/* 
use permet de récupérer les données d'une promesse dans un composant serveur de React
*/
	const results = use<ApiResponse<Action[]>>(
		new ActionApiService().selectAll(),
	);
	return (
		<section>
			{results.data?.map((item) => (
				// item est passé en props
				<ActionListItem key={item.id} data={item} />
			))}
		</section>
	);
};

export default ActionList;
