import { c as registerServerReference } from "../index.js";
import z from "zod";
import "node:async_hooks";
import "set-cookie-parser";
class UserActionFormValidator {
  validate = /* @__PURE__ */ registerServerReference($$hoist_0_anonymous_server_function, "7c17d3413dd9", "$$hoist_0_anonymous_server_function");
}
async function $$hoist_0_anonymous_server_function(data) {
  "use server";
  const constraints = z.object({
    name: z.string("Le nom est obligatoire").min(5, "Un nom doit comporter, au minimum, 5 caractères").max(50, "Un nom doit comporter, au maximum, 50 caractères"),
    description: z.string("La description est obligatoire").min(20, "La description doit comporter, au minimum, 20 caractères").max(300, "La description doit comporter, au maximum, 300 caractères"),
    association_proposal: z.string("Le nom de l'association est obligatoire").min(
      5,
      "Le nom de l'association doit comporter au minimum 5 caractères"
    ).max(
      100,
      "Le nom de l'association doit comporter au maximum 100 caractères"
    ),
    is_active: z.union([z.string(), z.boolean()]).optional(),
    source: z.string().optional()
  });
  const validation = await constraints.safeParseAsync(data);
  if (!validation.success) {
    return validation.error;
  }
  return validation.data;
}
export {
  $$hoist_0_anonymous_server_function,
  UserActionFormValidator as default
};
