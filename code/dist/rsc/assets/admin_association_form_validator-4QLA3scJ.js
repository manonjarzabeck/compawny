import { c as registerServerReference } from "../index.js";
import z from "zod";
import "node:async_hooks";
import "set-cookie-parser";
class AdminAssociationFormValidator {
  // VALIDATION DES DONNÉES DU FORMULAIRE
  validate = /* @__PURE__ */ registerServerReference($$hoist_0_anonymous_server_function, "d583bd288879", "$$hoist_0_anonymous_server_function");
}
async function $$hoist_0_anonymous_server_function(data) {
  "use server";
  const constraints = z.object({
    id: z.union([
      z.string().nullable(),
      // coerce : transtyper
      z.coerce.number().positive()
    ]),
    name: z.string("Le nom est obligatoire").min(2, "Un nom doit comporter, au minimum, 2 caractères").max(50, "Un nom doit comporter, au maximum, 50 caractères"),
    image: z.union([
      z.string().nullable(),
      // contrainte obligatoire
      z.file("L'image est obligatoire")
    ]),
    description: z.string("La description est obligatoire").min(20, "La description doit comporter, au minimum, 20 caractères").max(300, "La description doit comporter, au maximum, 300 caractères"),
    website: z.string("Le site web est obligatoire").min(15, "Le site web doit comporter, au minimum, 15 caractères").max(100, "Le site web doit comporter, au maximum, 100 caractères"),
    address: z.string("L'adresse est obligatoire").min(20, "L'adresse doit comporter, au minimum, 20 caractères").max(150, "L'adresse doit comporter, au maximum, 150 caractères"),
    email: z.string("L'email est obligatoire").min(20, "L'email doit comporter, au minimum, 20 caractères").max(150, "L'email doit comporter, au maximum, 150 caractères"),
    latitude: z.coerce.number("La latitude est obligatoire"),
    longitude: z.coerce.number("La longitude est obligatoire"),
    country_id: z.coerce.number().min(1, "Veuillez sélectionner un pays")
  });
  const validation = await constraints.safeParseAsync(data);
  if (!validation.success) {
    return validation.error;
  }
  return validation.data;
}
export {
  $$hoist_0_anonymous_server_function,
  AdminAssociationFormValidator as default
};
