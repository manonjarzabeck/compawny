import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference } from "../index.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import "node:async_hooks";
import "set-cookie-parser";
const UserEspace = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "89b65f040d79", "default");
const UserSpacePage = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Espace utilisateur",
        description: "Espace utilisateur - Dashboard favoris",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(UserEspace, {})
  ] });
};
export {
  UserSpacePage as default
};
