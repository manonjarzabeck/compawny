import type { ZodError } from "zod";
import type { Contact } from "../../../models/contact";

export type ContactFormContentProps = {
	validator: (data: Partial<Contact>) => Promise<Partial<Contact> | ZodError>;
};
