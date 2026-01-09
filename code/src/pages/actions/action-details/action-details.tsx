// pages/actions/action_detail.tsx
import { use } from "react";
import type { Action } from "../../../../models/action";
import ActionDetailsContent from "../../../components/action/action-details/action_details_content";
import Seo from "../../../components/seo/seo";
import type { ActionDetailsParams } from "../../../models/params/action_details_params";
import ActionApiService from "../../../services/action_api_service";

const ActionDetailPage = ({ params }: ActionDetailsParams) => {
	const { id } = params;
	// récuperer les données
	const result = use(new ActionApiService().selectOne(id));

	// console.log(result);

	return (
		<>
			<Seo title="Actions" description="Détails des actions" url="" />
			<ActionDetailsContent data={result.data as Action} />
		</>
	);
};
export default ActionDetailPage;
