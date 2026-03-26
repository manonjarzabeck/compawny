import type { ZodError } from "zod";
import type { Association } from "../../../../models/association";
import type { Country } from "../../../../models/country";
import type { Department } from "../../../../models/department";

export type AdminAssociationsFormContentProps = {
	country: Country[];
	department: Department[];
	validator: (
		data: Partial<Association>,
	) => Promise<Partial<Association> | ZodError>;
	dataToUpdate: Association | undefined;
};
