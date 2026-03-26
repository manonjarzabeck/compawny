import type { Country } from "./country";
import type { Department } from "./department";

type Association = {
	id: number;
	name: string;
	introduction: string;
	image: string;
	description: string;
	website: string;
	address: string;
	email: string;
	is_international: boolean;
	latitude: number;
	longitude: number;

	country_id: number;
	country: Country;

	department_id: number;
	department: Department;
};

export type { Association };
