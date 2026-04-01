import { c as registerServerReference } from "../index.js";
import z from "zod";
import "node:async_hooks";
import "set-cookie-parser";
class AdminAdoptionFormValidator {
  // VALIDATION DES DONNÉES DU FORMULAIRE
  validate = /* @__PURE__ */ registerServerReference($$hoist_0_anonymous_server_function, "37e950129265", "$$hoist_0_anonymous_server_function");
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
    arrival: z.coerce.date({ message: "La date d'arrivée est obligatoire" }).max(/* @__PURE__ */ new Date(), "La date d'arrivée ne peut pas être dans le futur"),
    description: z.string("La description est obligatoire").min(20, "La description doit comporter, au minimum, 20 caractères").max(300, "La description doit comporter, au maximum, 300 caractères"),
    association_id: z.coerce.number().min(1, "Veuillez sélectionner une association"),
    species_id: z.coerce.number().min(1, "Veuillez sélectionner une espèce")
  });
  const validation = await constraints.safeParseAsync(data);
  if (!validation.success) {
    return validation.error;
  }
  return validation.data;
}
export {
  $$hoist_0_anonymous_server_function,
  AdminAdoptionFormValidator as default
};
