import type { Asso } from "./asso";

type Action = {
	id: number;
	name: string;
	image: string;
	description: string;
	published: number;
	is_active: boolean;
	asso_id: number;
	asso: Asso;
};

export type { Action };
