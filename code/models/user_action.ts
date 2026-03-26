import type { Action } from "./action";
import type { User } from "./user";

type UserAction = {
	user_id: number;
	action_id: number;

	user?: User;
	action?: Action;
};

export type { UserAction };
