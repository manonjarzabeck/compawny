import type { ZodError } from "zod";
import type { Action } from "../../../../models/action";
import type { Asso } from "../../../../models/asso";

type AdminActionsFormContentProps = {
	asso: Asso[];
	validator: (data: Partial<Action>) => Promise<Partial<Action> | ZodError>;
	dataToUpdate: Action | undefined;
};

export type { AdminActionsFormContentProps };
