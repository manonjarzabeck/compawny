import type { Animal } from "../../../../models/animal";
import type { Species } from "../../../../models/species";

export type PageAdoptionsProps = {
	adoptions: Animal[];
	speciesList: Species[];
};
