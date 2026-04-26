import { use } from "react";
import type { Animal } from "../../../models/animal";
import type { Species } from "../../../models/species";
import AdoptionsClient from "../../components/adoption-sos/adoption-client/adoption-client";
import IntroPage from "../../components/intro-pages/intro-pages";
import Seo from "../../components/seo/seo";
import type { ApiResponse } from "../../models/api_response";
import AdoptionApiService from "../../services/adoption_api_service";
import SpeciesApiService from "../../services/species_api_service";

const ListeAdoptionsPage = () => {
	/* 
	=====================================================
	RÉCUPÉRATION DES ADOPTIONS (ANIMAUX)
	→ appel API pour récupérer tous les animaux à adopter
	→ use() permet de consommer directement la promesse
	=====================================================
	*/
	const results = use<ApiResponse<Animal[]>>(
		new AdoptionApiService().selectAll(),
	);

	/* 
	=====================================================
	RÉCUPÉRATION DES ESPÈCES
	→ utilisé pour filtrer les animaux (chien, chat, etc.)
	=====================================================
	*/
	const speciesResults = use<ApiResponse<Species[]>>(
		new SpeciesApiService().selectAll(),
	);

	/* 
	=====================================================
	SÉCURISATION DES DONNÉES
	→ évite les erreurs si les données ne sont pas encore chargées
	→ garantit toujours un tableau exploitable
	=====================================================
	*/
	const animals = results.data ?? [];
	const speciesList = speciesResults.data ?? [];

	return (
		<>
			{/* 
			=====================================================
			SEO
			→ améliore le référencement de la page
			=====================================================
			*/}
			<Seo
				title="Adoptions d'animaux SOS"
				description="Tous les animaux SOS à l'adoption"
				url="/adoptions"
			/>

			{/* 
			=====================================================
			SECTION INTRODUCTION
			→ contextualise la page et crée de l’émotion
			→ important pour l’expérience utilisateur
			=====================================================
			*/}
			<IntroPage
				image="/img/pages/Adoption.png"
				alt="Dessin bénévoles animaliers de la section Adoption SOS"
				title="Parce qu’ils méritent aussi leur bonheur 🫶🏼"
				description="Derrière chaque regard se cache une histoire singulière. Seniors,
					malades ou considérés comme plus difficiles à adopter, ces animaux
					n’attendent qu’une famille prête à leur offrir stabilité et douceur.
					Découvre ces profils attachants et laisse parler ton cœur."
			/>

			{/* 
			=====================================================
			AFFICHAGE DES ADOPTIONS
			→ composant client qui gère :
			   - affichage des cartes
			   - filtres par espèce
			   - logique d’interaction utilisateur
			=====================================================
			*/}
			<AdoptionsClient adoptions={animals} speciesList={speciesList} />
		</>
	);
};

export default ListeAdoptionsPage;
