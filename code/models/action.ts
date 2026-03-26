import type { Association } from "./association";

type Action = {
	id: number;
	name: string;
	image: string;
	description: string;
	published: string;
	is_active: boolean;
	association_proposal: string;
	source?: "admin" | "visitor";

	association_id: number;
	association: Association;
};

export type { Action };
