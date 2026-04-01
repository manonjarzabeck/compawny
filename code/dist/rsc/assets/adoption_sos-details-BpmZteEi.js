import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import "node:async_hooks";
import "set-cookie-parser";
const AdoptionDetailsContent = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "ccba641e47ea", "default");
const AdoptionDetailPage = ({ params }) => {
  const { id } = params;
  const result = react_reactServerExports.use(new AdoptionApiService().selectOne(id));
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Seo, { title: "Adoptions", description: "Détails des Adoptions SOS", url: "" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(AdoptionDetailsContent, { data: result.data })
  ] });
};
export {
  AdoptionDetailPage as default
};
