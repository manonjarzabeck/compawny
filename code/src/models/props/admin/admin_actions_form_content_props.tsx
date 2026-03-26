import type { ZodError } from "zod";
import type { Action } from "../../../../models/action";
import type { Association } from "../../../../models/association";

export type AdminActionsFormContentProps = {
	association: Association[];
	validator: (data: Partial<Action>) => Promise<Partial<Action> | ZodError>;
	dataToUpdate: Action | undefined;
};
