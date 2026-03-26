"use client";

import { useMemo, useState } from "react";
import styles from "../../../assets/css/filtered.module.css";
import type { PageActionsProps } from "../../../models/props/pages/page_actions_props";
import Btn from "../../btn/Btn";
import ActionList from "../action-list/action_list";
import FilterActions from "./filtered-action/filtered-action";

const PageActions = ({ actions, departments }: PageActionsProps) => {
	const [selectedDepartment, setSelectedDepartment] = useState<string>("");

	const filteredActions = useMemo(() => {
		if (!selectedDepartment) return actions;

		return actions.filter(
			(action) =>
				action.association.department_id === Number(selectedDepartment),
		);
	}, [selectedDepartment, actions]);

	return (
		<>
			<FilterActions
				actions={actions}
				departments={departments}
				selectedDepartment={selectedDepartment}
				onChange={setSelectedDepartment}
			/>

			{filteredActions.length === 0 ? (
				<p className={styles.nothingToSee}>
					Aucune action disponible pour ce département.
				</p>
			) : (
				<ActionList
					actions={filteredActions}
					departments={departments}
					selectedDepartment={selectedDepartment}
					onChange={setSelectedDepartment}
				/>
			)}
		</>
	);
};

export default PageActions;
