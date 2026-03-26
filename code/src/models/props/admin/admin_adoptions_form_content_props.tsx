import type { ZodError } from "zod";
import type { Animal } from "../../../../models/animal";
import type { Association } from "../../../../models/association";
import type { Species } from "../../../../models/species";

export type AdminAdoptionsFormContentProps = {
	association: Association[];
	species: Species[];
	validator: (data: Partial<Animal>) => Promise<Partial<Animal> | ZodError>;
	dataToUpdate: Animal | undefined;
};
