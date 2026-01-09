import type { Asso } from "./asso";
import type { User } from "./user";

type Action = {
	id: number;
	name: string;
	image: string;
	description: string;
	is_active: boolean;

	asso_id: number;
	asso: Asso;

	// liste concaténée des indentifiants des user
	user_ids: string;
	users: User[];
};

export type { Action };
