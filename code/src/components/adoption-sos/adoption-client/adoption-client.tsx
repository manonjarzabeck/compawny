"use client";

import { useMemo, useState } from "react";
import styles from "../../../assets/css/filtered.module.css";
import type { PageAdoptionsProps } from "../../../models/props/pages/page_adoptions_props";
import AdoptionList from "../adoption-list/adoption_list";
import FilterAdoptions from "./filtered-adoption/filtered-adoption";

const AdoptionsClient = ({ adoptions, speciesList }: PageAdoptionsProps) => {
	const [selectedSpecies, setSelectedSpecies] = useState<string>("");

	// ✅ useMemo pour éviter de recalculer à chaque render
	const filteredAnimals = useMemo(() => {
		if (!selectedSpecies) return adoptions;

		return adoptions.filter(
			(animal) => animal.species_id === Number(selectedSpecies),
		);
	}, [selectedSpecies, adoptions]);

	return (
		<>
			<FilterAdoptions
				adoptions={adoptions}
				speciesList={speciesList}
				selectedSpecies={selectedSpecies}
				setSelectedSpecies={setSelectedSpecies}
			/>

			{filteredAnimals.length === 0 ? (
				<p className={styles.nothingToSee}>
					Aucun animal disponible pour cette espèce.
				</p>
			) : (
				<AdoptionList adoptions={filteredAnimals} speciesList={speciesList} />
			)}
		</>
	);
};

export default AdoptionsClient;
