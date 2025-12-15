import type { Country } from "./country";

type Asso = {
	id: number;
	name: string;
	image: string;
	description: string;
	siteweb: string;
	address: string;

	country_id: number;
	country: Country;
};

export type { Asso };
