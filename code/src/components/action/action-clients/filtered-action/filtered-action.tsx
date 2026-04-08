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
				// Lorsqu’un département est sélectionné,
				// on transmet la nouvelle valeur au composant parent
				onChange={(e) => onChange(e.target.value)}
			>
				{/* Option par défaut : aucune sélection */}
				<option value="">Tous les départements</option>

				{/* Génération dynamique des options à partir
				    de la liste des départements reçue en props */}
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
