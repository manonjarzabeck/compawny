import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference } from "../index.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import "node:async_hooks";
import "set-cookie-parser";
const ExperienceContact = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "53136e59d7a2", "default");
const ExperienceFormulairePage = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Ils en parlent...",
        description: "Page retour d'experience et formulaire de contact",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(ExperienceContact, {})
  ] });
};
export {
  ExperienceFormulairePage as default
};
