import styles from "../../../../assets/css/filtered.module.css";
import type { FilterActionsProps } from "../../../../models/props/filtre/filtered_actions_props";

const FilterActions = ({
	departments,
	selectedDepartment,
	onChange,
}: FilterActionsProps) => {
	return (
		<div className={styles.filter}>
			<select
				className={styles.select}
				value={selectedDepartment}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value="">Tous les départements</option>

				{departments.map((dept) => (
					<option key={dept.id} value={dept.id}>
						{dept.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterActions;
