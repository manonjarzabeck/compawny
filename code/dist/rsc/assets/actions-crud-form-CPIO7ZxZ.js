import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import AdminActionFormValidator from "./admin_action_form_validator-CQow8PYI.js";
import "node:async_hooks";
import "set-cookie-parser";
import "zod";
const AdminActionsFormContent = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "9dd3d2a6e2bf", "default");
const AdminActionsForm = ({ params }) => {
  const association = react_reactServerExports.use(new AssociationApiService().selectAll()).data;
  const { id } = params;
  let dataToUpdate;
  if (id) {
    dataToUpdate = react_reactServerExports.use(new ActionApiService().selectOne(id)).data;
  }
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
    AdminActionsFormContent,
    {
      association,
      validator: new AdminActionFormValidator().validate,
      dataToUpdate
    }
  );
};
export {
  AdminActionsForm as default
};
