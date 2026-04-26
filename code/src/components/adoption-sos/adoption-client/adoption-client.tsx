"use client";

import { useMemo, useState } from "react";
import styles from "../../../assets/css/filtered.module.css";
import type { PageAdoptionsProps } from "../../../models/props/pages/page_adoptions_props";
import BackToTop from "../../btn/backToTop/backToTop";
import AdoptionList from "../adoption-list/adoption_list";
import FilterAdoptions from "./filtered-adoption/filtered-adoption";

/* 
=====================================================
 ADOPTIONS CLIENT
→ composant parent côté client pour la page des adoptions

- gère l’état du filtre sélectionné
- filtre les animaux selon l’espèce choisie
- affiche soit un message vide, soit la liste filtrée
- affiche aussi le bouton "retour en haut"

👉 rôle : gérer la logique de filtre et d’affichage global
👉 ne gère PAS le rendu détaillé d’une carte individuelle
=====================================================
*/

const AdoptionsClient = ({ adoptions, speciesList }: PageAdoptionsProps) => {
	/* 
	=====================================================
	STATE DU FILTRE
	→ stocke l’espèce actuellement sélectionnée
	=====================================================
	*/
	const [selectedSpecies, setSelectedSpecies] = useState<string>("");

	/* 
	=====================================================
	FILTRAGE DES DONNÉES
	→ useMemo évite de recalculer le filtre à chaque render
	→ le calcul ne se relance que si :
	   - l’espèce sélectionnée change
	   - ou la liste des adoptions change
	=====================================================
	*/
	const filteredAnimals = useMemo(() => {
		// Si aucune espèce n’est sélectionnée, on affiche tous les animaux
		if (!selectedSpecies) return adoptions;

		// Sinon, on filtre selon l’espèce choisie
		return adoptions.filter(
			(animal) => animal.species_id === Number(selectedSpecies),
		);
	}, [selectedSpecies, adoptions]);

	return (
		<>
			{/* 
			=====================================================
			FILTRE PAR ESPÈCE
			→ permet à l’utilisateur de filtrer les adoptions
			=====================================================
			*/}
			<FilterAdoptions
				adoptions={adoptions}
				speciesList={speciesList}
				selectedSpecies={selectedSpecies}
				setSelectedSpecies={setSelectedSpecies}
			/>

			{/* 
			=====================================================
			AFFICHAGE CONDITIONNEL
			→ si aucun animal ne correspond au filtre :
			   affichage d’un message
			→ sinon :
			   affichage de la liste + bouton retour en haut
			=====================================================
			*/}
			{filteredAnimals.length === 0 ? (
				<p className={styles.nothingToSee}>
					Aucun animal disponible pour cette espèce.
				</p>
			) : (
				<>
					<AdoptionList adoptions={filteredAnimals} speciesList={speciesList} />
					<BackToTop />
				</>
			)}
		</>
	);
};

export default AdoptionsClient;
