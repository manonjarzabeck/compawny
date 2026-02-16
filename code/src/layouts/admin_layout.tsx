import React from "react";
import { Outlet } from "react-router";
import AdminHeader from "../components/admin/adminHeader/adminHeader";

const AdminLayout = () => {
	return (
		<>
			<AdminHeader />
			<Outlet />
		</>
	);
};

export default AdminLayout;
