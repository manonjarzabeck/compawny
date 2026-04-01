import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { _ as __vite_rsc_react__, r as registerClientReference } from "../index.js";
import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { B as Btn } from "./Btn-D2406Z0r.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import "node:async_hooks";
import "set-cookie-parser";
const RemoveDuplicateServerCss = void 0;
const Resources = /* @__PURE__ */ ((React, deps, RemoveDuplicateServerCss2) => {
  return function Resources2() {
    return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
      key: "css:" + href,
      rel: "stylesheet",
      precedence: "vite-rsc/importer-resources",
      href,
      "data-rsc-css-href": href
    })), RemoveDuplicateServerCss2]);
  };
})(
  __vite_rsc_react__,
  __vite_rsc_assets_manifest__.serverResources["src/pages/authentification/authentification.tsx"],
  RemoveDuplicateServerCss
);
const authSection = "_authSection_40vth_1";
const backBtnWrapper = "_backBtnWrapper_40vth_9";
const authIntro = "_authIntro_40vth_17";
const formsWrapper = "_formsWrapper_40vth_36";
const styles = {
  authSection,
  backBtnWrapper,
  authIntro,
  formsWrapper
};
const LoginForm = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "86f3a7b02e65", "default");
const RegisterForm = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "bcfd68a6dc01", "default");
const AuthentificationPage = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Authentification",
        description: "Interface d'authentification",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.backBtnWrapper, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/", children: "Retour à l'accueil" }) }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("section", { className: styles.authSection, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.authIntro, children: [
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h1", { children: "Mon espace personnel 👤" }),
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { children: "Connectez-vous ou créez un compte pour enregistrer vos actions favorites et accéder à votre espace personnel." })
      ] }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.formsWrapper, children: [
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(LoginForm, {}),
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(RegisterForm, {})
      ] })
    ] })
  ] });
};
const $$default = AuthentificationPage;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "AuthentificationPage");
function __vite_rsc_wrap_css__(value, name) {
  if (typeof value !== "function") return value;
  function __wrapper(props) {
    return __vite_rsc_react__.createElement(
      __vite_rsc_react__.Fragment,
      null,
      __vite_rsc_react__.createElement(Resources),
      __vite_rsc_react__.createElement(value, props)
    );
  }
  Object.defineProperty(__wrapper, "name", { value: name });
  return __wrapper;
}
export {
  $$wrap_$$default as default
};
