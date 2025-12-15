import type { Asso } from "./asso";
import type { Species } from "./species";

type Animal = {
	id: number;
	name: string;
	picture: string;
	arrival: number;
	asso_id: number;
	species_id: number;

	asso: Asso;
	species: Species;
};

export type { Animal };
