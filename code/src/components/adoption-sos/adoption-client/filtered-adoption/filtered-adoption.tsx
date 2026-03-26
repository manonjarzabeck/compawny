import styles from "../../../../assets/css/filtered.module.css";
import type { FilterAdoptionsProps } from "../../../../models/props/filtre/filtered_adoptions_props";

const FilterAdoptions = ({
	selectedSpecies,
	setSelectedSpecies,
	speciesList,
}: FilterAdoptionsProps) => {
	return (
		<div className={styles.filter}>
			<select
				className={styles.select}
				value={selectedSpecies}
				onChange={(e) => setSelectedSpecies(e.target.value)}
			>
				<option value="">Toutes les espèces</option>

				{speciesList.map((species) => (
					<option key={species.id} value={species.id}>
						{species.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterAdoptions;
