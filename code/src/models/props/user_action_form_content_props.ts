// User Action Form (Proposition action) props

import type { ZodError } from "zod";
import type { Action } from "../../../models/action";

export type UserActionsFormContentProps = {
	validator: (data: Partial<Action>) => Promise<Partial<Action> | ZodError>;
};
