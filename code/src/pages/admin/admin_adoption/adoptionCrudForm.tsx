import { use } from "react";
import type { Asso } from "../../../../models/asso";
import type { Species } from "../../../../models/species";
import AdminAdoptionsFormContent from "../../../components/adoption-sos/admin_adoptions/admin_adoptions_form_content";
import AssoApiService from "../../../services/asso_api_service";
import SpeciesApiService from "../../../services/species_api_service";

const AdminAdoptionsForm = () => {
	const species = use(new SpeciesApiService().selectAll()).data as Species[];
	const asso = use(new AssoApiService().selectAll()).data as Asso[];

	return <AdminAdoptionsFormContent asso={asso} species={species} />;
};

export default AdminAdoptionsForm;
