import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { _ as __vite_rsc_react__, a as react_reactServerExports, N as NavLink } from "../index.js";
import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { B as BackBtn } from "./backBtn-Cb4NWVdv.js";
import { A as AdminFlashMessage } from "./admin-flash-msg-CrckCKE1.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/components/admin/dashboard/pending-actions/pending_action_homepage.tsx"],
  RemoveDuplicateServerCss
);
const container = "_container_k7ke3_1";
const title = "_title_k7ke3_11";
const emptyMessage = "_emptyMessage_k7ke3_18";
const List = "_List_k7ke3_25";
const Card = "_Card_k7ke3_33";
const itemRow = "_itemRow_k7ke3_44";
const label = "_label_k7ke3_48";
const value = "_value_k7ke3_57";
const buttons = "_buttons_k7ke3_66";
const btn = "_btn_k7ke3_74";
const btnEdit = "_btnEdit_k7ke3_75";
const styles = {
  container,
  title,
  emptyMessage,
  List,
  Card,
  itemRow,
  label,
  value,
  buttons,
  btn,
  btnEdit
};
const PendingActionHomepage = () => {
  const actions = react_reactServerExports.use(new ActionApiService().selectAll()).data ?? [];
  const pendingActions = actions.filter(
    (item) => item.source === "visitor" && !item.is_active
  );
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(BackBtn, { fallbackLink: "/admin", children: "Revenir au tableau de bord" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("section", { className: styles.container, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h2", { className: styles.title, children: "Actions proposées par les utilisateurs" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(AdminFlashMessage, {}),
      pendingActions.length === 0 ? /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.emptyMessage, children: "Aucune action proposée pour le moment 🐾" }) : /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.List, children: pendingActions.map((item) => {
        return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.Card, children: [
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("p", { className: styles.itemRow, children: [
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("span", { className: styles.label, children: "Nom de l’action" }),
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("span", { className: styles.value, children: item.name })
          ] }),
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("p", { className: styles.itemRow, children: [
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("span", { className: styles.label, children: "Nom de l'association " }),
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("span", { className: styles.value, children: item.association_proposal })
          ] }),
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("p", { className: styles.itemRow, children: [
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("span", { className: styles.label, children: "Description" }),
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("span", { className: styles.value, children: item.description })
          ] }),
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.buttons, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
            NavLink,
            {
              className: `${styles.btn} ${styles.btnEdit}`,
              to: `/admin/action-form/${item.id}`,
              children: "Modifier"
            }
          ) })
        ] }, item.id);
      }) })
    ] })
  ] });
};
const $$default = PendingActionHomepage;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "PendingActionHomepage");
function __vite_rsc_wrap_css__(value2, name) {
  if (typeof value2 !== "function") return value2;
  function __wrapper(props) {
    return __vite_rsc_react__.createElement(
      __vite_rsc_react__.Fragment,
      null,
      __vite_rsc_react__.createElement(Resources),
      __vite_rsc_react__.createElement(value2, props)
    );
  }
  Object.defineProperty(__wrapper, "name", { value: name });
  return __wrapper;
}
const PendingActionsPage = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default, {});
};
export {
  PendingActionsPage as default
};
