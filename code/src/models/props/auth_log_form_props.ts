import type { User } from "../../../models/user";

export type AuthLogFormProps = {
	validator: (data: Partial<User>) => Promise<Partial<User> | Error>;
};
