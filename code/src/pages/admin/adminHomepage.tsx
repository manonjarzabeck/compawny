import React from "react";
import { NavLink } from "react-router";

const adminHomepage = () => {
	return (
		<section>
			<h2>Admin Home Page</h2>
			<NavLink to={"/admin/action-form"}>Gestion des actions</NavLink>
			<NavLink to={"/admin/asso-form"}>Gestion des associations</NavLink>
			<NavLink to={"/admin/adoption-form"}>Gestion des adoptions SOS</NavLink>
		</section>
	);
};

export default adminHomepage;
