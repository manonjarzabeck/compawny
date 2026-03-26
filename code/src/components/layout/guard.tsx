"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { GuardProps } from "../../models/props/pages/guard_props";
import SecurityService from "../../services/security_service";

const Guard = ({ roles, children }: GuardProps) => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// vérifier le rôle à l'afficage du composant / page
	useEffect(() => {
		const user = new SecurityService().getUser();
		if (roles.indexOf(user?.role?.name as string) === -1) {
			// redirection vers une page react
			navigate("/");
		}
	}, [roles.indexOf, navigate]);

	return <>{children}</>;
};
export default Guard;
