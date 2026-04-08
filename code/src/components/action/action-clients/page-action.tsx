"use client";

import { useMemo, useState } from "react";
import styles from "../../../assets/css/filtered.module.css";
import type { PageActionsProps } from "../../../models/props/pages/page_actions_props";
import ActionList from "../action-list/action_list";
import FilterActions from "./filtered-action/filtered-action";

const PageActions = ({ actions, departments }: PageActionsProps) => {
	// Stocke le département sélectionné par l’utilisateur
	const [selectedDepartment, setSelectedDepartment] = useState<string>("");

	const filteredActions = useMemo(() => {
		// Si aucun département n’est sélectionné,
		// on affiche toutes les actions
		if (!selectedDepartment) return actions;

		// Sinon, on filtre les actions selon le département
		// associé à l’association liée à l’action
		return actions.filter(
			(action) =>
				action.association.department_id === Number(selectedDepartment),
		);
		// useMemo évite de recalculer le filtre inutilement
		// tant que selectedDepartment ou actions ne changent pas
	}, [selectedDepartment, actions]);

	return (
		<>
			<FilterActions
				actions={actions}
				departments={departments}
				selectedDepartment={selectedDepartment}
				onChange={setSelectedDepartment}
			/>

			{/* Affichage conditionnel :
			    si aucune action ne correspond au filtre,
			    un message est affiché à l’utilisateur */}
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
