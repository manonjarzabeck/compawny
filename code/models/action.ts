import type { Association } from "./association";

type Action = {
	id: number;
	name: string;
	image: string;
	description: string;
	published: Date;
	is_active: boolean;

	association_id: number;
	association: Association;
};

export type { Action };
