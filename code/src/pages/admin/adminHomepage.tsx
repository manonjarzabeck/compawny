import React from "react";
import AdminCrud from "../../components/admin/adminCrud/adminCrud";
import DashboardAdmin from "../../components/admin/dashboard/dashboard";

const AdminHomepage = () => {
	return (
		<>
			<DashboardAdmin />
			<AdminCrud />
		</>
	);
};

export default AdminHomepage;
