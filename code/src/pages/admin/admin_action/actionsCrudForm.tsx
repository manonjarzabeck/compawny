import { use } from "react";
import type { Asso } from "../../../../models/asso";
import AdminActionsFormContent from "../../../components/action/admin_actions/admin_actions_form_content";
import AssoApiService from "../../../services/asso_api_service";
import AdminActionFormValidator from "../../../validators/admin/admin_action_form_validator";

const AdminActionsForm = () => {
	// récuperer les Users
	const asso = use(new AssoApiService().selectAll()).data as Asso[];

	return (
		<AdminActionsFormContent
			asso={asso}
			validator={new AdminActionFormValidator().validate}
		/>
	);
};

export default AdminActionsForm;
