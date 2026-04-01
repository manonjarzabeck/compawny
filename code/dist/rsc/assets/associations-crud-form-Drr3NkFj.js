import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import { D as DepartmentApiService } from "./department_api_service-LswQr1u6.js";
import AdminAssociationFormValidator from "./admin_association_form_validator-4QLA3scJ.js";
import "node:async_hooks";
import "set-cookie-parser";
import "zod";
const AdminAssociationsFormContent = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "8b5427f87d64", "default");
class CountryApiService {
  // préfixe de l'API
  prefix = "/api/country";
  // selection de tous les enregistrements
  selectAll = async () => {
    const request = new Request(
      `${void 0}${this.prefix}`
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  selectOne = async (id) => {
    const request = new Request(
      `${void 0}${this.prefix}/${id}`
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
}
const AdminAssociationsForm = ({ params }) => {
  const country = react_reactServerExports.use(new CountryApiService().selectAll()).data;
  const department = react_reactServerExports.use(new DepartmentApiService().selectAll()).data;
  const { id } = params;
  let dataToUpdate;
  if (id) {
    dataToUpdate = react_reactServerExports.use(new AssociationApiService().selectOne(id)).data;
  }
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
    AdminAssociationsFormContent,
    {
      country,
      department,
      validator: new AdminAssociationFormValidator().validate,
      dataToUpdate
    }
  );
};
export {
  AdminAssociationsForm as default
};
