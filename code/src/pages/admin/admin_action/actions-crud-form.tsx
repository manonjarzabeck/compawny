import { use } from "react";
import type { Action } from "../../../../models/action";
import type { Association } from "../../../../models/association";
import AdminActionsFormContent from "../../../components/admin/admin-crud-form/admin_actions_form_content";
import type { AdminActionsParams } from "../../../models/params/admin/admin_actions_params";
import ActionApiService from "../../../services/action_api_service";
import AssociationApiService from "../../../services/association_api_service";
import AdminActionFormValidator from "../../../validators/admin/admin_action_form_validator";

const AdminActionsForm = ({ params }: AdminActionsParams) => {
	// récuperer les Users
	const association = use(new AssociationApiService().selectAll())
		.data as Association[];

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
			association={association}
			validator={new AdminActionFormValidator().validate}
			dataToUpdate={dataToUpdate}
		/>
	);
};

export default AdminActionsForm;
