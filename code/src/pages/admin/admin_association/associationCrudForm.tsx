import { use } from "react";
import type { Association } from "../../../../models/association";
import type { Country } from "../../../../models/country";
import type { Department } from "../../../../models/department";
import AdminAssociationsFormContent from "../../../components/association/admin_association/admin_association_form_content";
import type { AdminAssociationsParams } from "../../../models/params/admin_associations_params";
import AssociationApiService from "../../../services/association_api_service";
import CountryApiService from "../../../services/country_api_service";
import DepartmentApiService from "../../../services/department_api_service";
import AdminAssociationFormValidator from "../../../validators/admin/admin_association_form_validator";

const AdminAssociationsForm = ({ params }: AdminAssociationsParams) => {
	const country = use(new CountryApiService().selectAll()).data as Country[];
	const department = use(new DepartmentApiService().selectAll())
		.data as Department[];

	const { id } = params;

	// récupérer les données à MAJ
	let dataToUpdate: Association | undefined;

	// si un identifiant est présent dans l'URL
	if (id) {
		dataToUpdate = use(new AssociationApiService().selectOne(id))
			.data as Association;
		// console.log(dataToUpdate);
	}

	return (
		<AdminAssociationsFormContent
			country={country}
			department={department}
			validator={new AdminAssociationFormValidator().validate}
			dataToUpdate={dataToUpdate}
		/>
	);
};

export default AdminAssociationsForm;
