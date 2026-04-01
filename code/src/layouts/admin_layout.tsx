import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import AdminHeader from "../components/admin/adminHeader/adminHeader";
import Guard from "../components/layout/guard";

const AdminLayout = () => {
	return (
		<Guard roles={["admin"]}>
			<ScrollRestoration />
			<AdminHeader />
			<Outlet />
		</Guard>
	);
};

export default AdminLayout;
