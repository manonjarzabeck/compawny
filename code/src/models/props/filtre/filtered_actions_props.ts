import type { Action } from "../../../../models/action";
import type { Department } from "../../../../models/department";

export type FilterActionsProps = {
	actions: Action[];
	departments: Department[];
	selectedDepartment: string;
	onChange: (value: string) => void;
};
