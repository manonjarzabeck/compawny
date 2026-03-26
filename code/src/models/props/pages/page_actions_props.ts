import type { Action } from "../../../../models/action";
import type { Department } from "../../../../models/department";

export type PageActionsProps = {
	actions: Action[];
	departments: Department[];
};
