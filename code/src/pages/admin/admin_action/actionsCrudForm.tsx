import { use } from "react";
import type { Action } from "../../../../models/action";
import type { Asso } from "../../../../models/asso";
import AdminActionsFormContent from "../../../components/action/admin_actions/admin_actions_form_content";
import type { AdminActionsParams } from "../../../models/params/admin_actions_params";
import ActionApiService from "../../../services/action_api_service";
import AssoApiService from "../../../services/asso_api_service";
import AdminActionFormValidator from "../../../validators/admin/admin_action_form_validator";

const AdminActionsForm = ({ params }: AdminActionsParams) => {
	// récuperer les Users
	const asso = use(new AssoApiService().selectAll()).data as Asso[];

	const { id } = params;

	// récupérer les données à MAJ
	let dataToUpdate: Action | undefined;

	// si un identifiant est présent dans l'URL
	if (id) {
		dataToUpdate = use(new ActionApiService().selectOne(id)).data as Action;
		// console.log(dataToUpdate);
	}

	return (
		<AdminActionsFormContent
			asso={asso}
			validator={new AdminActionFormValidator().validate}
			dataToUpdate={dataToUpdate}
		/>
	);
};

export default AdminActionsForm;
