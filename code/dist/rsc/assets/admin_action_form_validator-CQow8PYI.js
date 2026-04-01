import { c as registerServerReference } from "../index.js";
import z from "zod";
import "node:async_hooks";
import "set-cookie-parser";
class AdminActionFormValidator {
  // VALIDATION DES DONNÉES DU FORMULAIRE
  validate = /* @__PURE__ */ registerServerReference($$hoist_0_anonymous_server_function, "ffa513e4cd88", "$$hoist_0_anonymous_server_function");
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
    published: z.union([
      z.string().length(0),
      z.coerce.date().max(
        /* @__PURE__ */ new Date(),
        "La date de publication ne peut pas être dans le futur"
      )
    ]),
    association_id: z.coerce.number().min(1, "Veuillez sélectionner une association")
  });
  const validation = await constraints.safeParseAsync(data);
  if (!validation.success) {
    return validation.error;
  }
  return validation.data;
}
export {
  $$hoist_0_anonymous_server_function,
  AdminActionFormValidator as default
};
