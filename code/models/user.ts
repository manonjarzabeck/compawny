import type { Role } from "./role";

type User = {
	id: number;
	name: string;
	email: string;
	password: string;
	role_id: number;
	role: Role;
};

export type { User };
