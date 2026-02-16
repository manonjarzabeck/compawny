import type { Association } from "./association";
import type { Species } from "./species";

type Animal = {
	id: number;
	name: string;
	image: string;
	arrival: Date;
	description: string;
	is_adoptable: boolean;

	association_id: number;
	association: Association;

	species_id: number;
	species: Species;
};

export type { Animal };
