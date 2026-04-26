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
				// Lorsqu’une espèce est sélectionnée,
				// on met à jour le state dans le composant parent
				onChange={(e) => setSelectedSpecies(e.target.value)}
			>
				{/* Option par défaut : afficher toutes les espèces */}
				<option value="">Toutes les espèces</option>

				{/* Génération dynamique des options à partir
				    de la liste des espèces */}
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
