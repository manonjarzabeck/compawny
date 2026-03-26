import type React from "react";

export type GuardProps = {
	roles: string[];
	// children permet de définir que le composant va posséder des éléments enfants
	children: React.JSX.Element | React.JSX.Element[];
};
