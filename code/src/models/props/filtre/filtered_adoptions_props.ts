import type { Animal } from "../../../../models/animal";
import type { Species } from "../../../../models/species";

export type FilterAdoptionsProps = {
	selectedSpecies: string;
	setSelectedSpecies: (value: string) => void;
	adoptions: Animal[];
	speciesList: Species[];
};
