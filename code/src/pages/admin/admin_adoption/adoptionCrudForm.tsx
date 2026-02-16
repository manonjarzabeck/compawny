import { use } from "react";
import type { Animal } from "../../../../models/animal";
import type { Association } from "../../../../models/association";
import type { Species } from "../../../../models/species";
import AdminAdoptionsFormContent from "../../../components/adoption-sos/admin_adoptions/admin_adoptions_form_content";
import type { AdminAdoptionsParams } from "../../../models/params/admin_adoptions_params";
import AdoptionApiService from "../../../services/adoption_api_service";
import AssociationApiService from "../../../services/association_api_service";
import SpeciesApiService from "../../../services/species_api_service";
import AdminAdoptionFormValidator from "../../../validators/admin/admin_adoption_form_validator";

const AdminAdoptionsForm = ({ params }: AdminAdoptionsParams) => {
	const species = use(new SpeciesApiService().selectAll()).data as Species[];
	const association = use(new AssociationApiService().selectAll())
		.data as Association[];

	const { id } = params;

	// récupérer les données à MAJ
	let dataToUpdate: Animal | undefined;

	// si un identifiant est présent dans l'URL
	if (id) {
		dataToUpdate = use(new AdoptionApiService().selectOne(id)).data as Animal;
		// console.log(dataToUpdate);
	}

	return (
		<AdminAdoptionsFormContent
			association={association}
			species={species}
			validator={new AdminAdoptionFormValidator().validate}
			dataToUpdate={dataToUpdate}
		/>
	);
};

export default AdminAdoptionsForm;
