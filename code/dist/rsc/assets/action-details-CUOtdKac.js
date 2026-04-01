import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import "node:async_hooks";
import "set-cookie-parser";
const ActionDetailsContent = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "c71db0f9472e", "default");
const ActionDetailPage = ({ params }) => {
  const { id } = params;
  const result = react_reactServerExports.use(new ActionApiService().selectOne(id));
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Seo, { title: "Actions", description: "Détails des actions", url: "" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(ActionDetailsContent, { data: result.data })
  ] });
};
export {
  ActionDetailPage as default
};
