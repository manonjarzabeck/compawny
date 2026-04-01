import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { _ as __vite_rsc_react__, a as react_reactServerExports, N as NavLink } from "../index.js";
import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { B as BackBtn } from "./backBtn-Cb4NWVdv.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import { s as styles } from "./admin_homepage.module-B9p5iG5A.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/pages/admin/admin_crud_homepages/adoption_homepage.tsx"],
  RemoveDuplicateServerCss
);
const AdminAdoptionHomepage = () => {
  const adoptions = react_reactServerExports.use(new AdoptionApiService().selectAll()).data;
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(BackBtn, { fallbackLink: "/admin", children: "Revenir au tableau de bord" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("section", { className: styles.container, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h2", { className: styles.title, children: "Gérer les adoptions SOS" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        NavLink,
        {
          className: `${styles.btn} ${styles.btnAdd}`,
          to: "/admin/adoption-form",
          children: "Ajouter"
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.List, children: adoptions?.map((item) => {
        return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.Card, children: [
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.CardName, children: item.name }),
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("img", { src: `/img/adoption/${item.image}`, alt: item.name }),
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.buttons, children: [
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
              NavLink,
              {
                className: `${styles.btn} ${styles.btnEdit}`,
                to: `/admin/adoption-form/${item.id}`,
                children: "Modifier"
              }
            ),
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
              NavLink,
              {
                className: `${styles.btn} ${styles.btnDelete}`,
                to: `/admin/adoption-form-delete/${item.id}`,
                children: "Supprimer"
              }
            )
          ] })
        ] }, item.id);
      }) })
    ] })
  ] });
};
const $$default = AdminAdoptionHomepage;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "AdminAdoptionHomepage");
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
