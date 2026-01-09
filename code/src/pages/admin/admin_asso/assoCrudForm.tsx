import { use } from "react";
import type { Country } from "../../../../models/country";
import AdminAssosFormContent from "../../../components/asso/admin_assos/admin_assos_form_content";
import CountryApiService from "../../../services/country_api_service";

const AdminAssoForm = () => {
	const country = use(new CountryApiService().selectAll()).data as Country[];

	return <AdminAssosFormContent country={country} />;
};

export default AdminAssoForm;
