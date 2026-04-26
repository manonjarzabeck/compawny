import type { Association } from "../../../../models/association";

export type AssociationDetailsContentProps = {
	data: Association;
	zoom?: number;
	mapStyle?: string;
	showBackButton?: boolean;
	tabletLayout?: "column" | "row";
	size?: "default" | "compact";
};
