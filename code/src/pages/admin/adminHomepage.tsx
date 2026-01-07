import React from "react";
import { NavLink } from "react-router";

const adminHomepage = () => {
	return (
		<section>
			<h2>Admin Home Page</h2>
			<NavLink to={"/admin/actions"}>Gérer les actions</NavLink>
		</section>
	);
};

export default adminHomepage;
