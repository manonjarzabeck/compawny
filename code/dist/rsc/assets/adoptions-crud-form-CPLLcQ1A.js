import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import { S as SpeciesApiService } from "./species_api_service-DzyE75Qo.js";
import AdminAdoptionFormValidator from "./admin_adoption_form_validator-DjlNTSGE.js";
import "node:async_hooks";
import "set-cookie-parser";
import "zod";
const AdminAdoptionsFormContent = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "0a639f88c1f5", "default");
const AdminAdoptionsForm = ({ params }) => {
  const species = react_reactServerExports.use(new SpeciesApiService().selectAll()).data;
  const association = react_reactServerExports.use(new AssociationApiService().selectAll()).data;
  const { id } = params;
  let dataToUpdate;
  if (id) {
    dataToUpdate = react_reactServerExports.use(new AdoptionApiService().selectOne(id)).data;
  }
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
    AdminAdoptionsFormContent,
    {
      association,
      species,
      validator: new AdminAdoptionFormValidator().validate,
      dataToUpdate
    }
  );
};
export {
  AdminAdoptionsForm as default
};
