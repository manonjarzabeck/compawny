import React from "react";
import { Outlet } from "react-router";
import AdminHeader from "../components/admin/adminHeader/adminHeader";
import Guard from "../components/layout/guard";

const AdminLayout = () => {
	return (
		<Guard roles={["admin"]}>
			<AdminHeader />
			<Outlet />
		</Guard>
	);
};

export default AdminLayout;
