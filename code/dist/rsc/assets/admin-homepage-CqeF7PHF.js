import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { _ as __vite_rsc_react__, a as react_reactServerExports } from "../index.js";
import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { B as Btn } from "./Btn-D2406Z0r.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import "node:async_hooks";
import "set-cookie-parser";
const RemoveDuplicateServerCss$1 = void 0;
const Resources$1 = /* @__PURE__ */ ((React, deps, RemoveDuplicateServerCss2) => {
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
  __vite_rsc_assets_manifest__.serverResources["src/components/admin/admin-cruds/admin-cruds.tsx"],
  RemoveDuplicateServerCss$1
);
const grid = "_grid_1htip_1";
const container = "_container_1htip_10";
const image = "_image_1htip_27";
const style = {
  grid,
  container,
  image
};
const AdminCruds = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("section", { className: style.grid, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: style.container, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "img",
        {
          className: style.image,
          src: "/img/homepage/actionguide.jpg",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/admin/action-homepage", children: "Gérer les actions 👉🏼" })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: style.container, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("img", { className: style.image, src: "/img/homepage/assoguide.jpg", alt: "" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/admin/association-homepage", children: "Gérer les associations 👉🏼" })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: style.container, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "img",
        {
          className: style.image,
          src: "/img/homepage/adoptionguide.png",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/admin/adoption-homepage", children: "Gérer les adoptions 👉🏼" })
    ] })
  ] });
};
const $$default$1 = AdminCruds;
const $$wrap_$$default$1 = /* @__PURE__ */ __vite_rsc_wrap_css__$1($$default$1, "AdminCruds");
function __vite_rsc_wrap_css__$1(value, name) {
  if (typeof value !== "function") return value;
  function __wrapper(props) {
    return __vite_rsc_react__.createElement(
      __vite_rsc_react__.Fragment,
      null,
      __vite_rsc_react__.createElement(Resources$1),
      __vite_rsc_react__.createElement(value, props)
    );
  }
  Object.defineProperty(__wrapper, "name", { value: name });
  return __wrapper;
}
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
  __vite_rsc_assets_manifest__.serverResources["src/components/admin/dashboard/dashboard.tsx"],
  RemoveDuplicateServerCss
);
const dashboardContainer = "_dashboardContainer_1c40p_1";
const statsGrid = "_statsGrid_1c40p_8";
const card = "_card_1c40p_17";
const number = "_number_1c40p_40";
const pendingCard = "_pendingCard_1c40p_49";
const pendingTitle = "_pendingTitle_1c40p_53";
const pendingNumber = "_pendingNumber_1c40p_54";
const testimonialCard = "_testimonialCard_1c40p_61";
const testimonialTitle = "_testimonialTitle_1c40p_65";
const testimonialNumber = "_testimonialNumber_1c40p_66";
const styles = {
  dashboardContainer,
  statsGrid,
  card,
  number,
  pendingCard,
  pendingTitle,
  pendingNumber,
  testimonialCard,
  testimonialTitle,
  testimonialNumber
};
const DashboardAdmin = () => {
  const actions = react_reactServerExports.use(new ActionApiService().selectAll()).data ?? [];
  const associations = react_reactServerExports.use(new AssociationApiService().selectAll()).data ?? [];
  const adoptions = react_reactServerExports.use(new AdoptionApiService().selectAll()).data ?? [];
  const totalActions = actions.length;
  const onlineActions = actions.filter((item) => item.is_active).length;
  const pendingActions = actions.filter(
    (item) => item.source === "visitor" && !item.is_active
  ).length;
  const internationalAssociations = associations.filter(
    (item) => item.is_international
  ).length;
  const activeAdoptions = adoptions.filter((item) => item.is_adoptable).length;
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("section", { className: styles.dashboardContainer, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.statsGrid, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h3", { children: "Total actions" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.number, children: totalActions })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h3", { children: "Actions en ligne" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.number, children: onlineActions })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h3", { children: "Associations internationales" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.number, children: internationalAssociations })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h3", { children: "Animaux à l'adoption" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.number, children: activeAdoptions })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: `${styles.card} ${styles.pendingCard}`, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h4", { className: styles.pendingTitle, children: "Actions en attente" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: `${styles.number} ${styles.pendingNumber}`, children: pendingActions }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/admin/pending-action-homepage", children: "Voir les actions proposées 👉🏼" })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: `${styles.card} ${styles.testimonialCard}`, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h4", { className: styles.testimonialTitle, children: "Retours d’expérience" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: `${styles.number} ${styles.testimonialNumber}`, children: "💌" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/admin/testimonial-homepage", children: "Voir les témoignages 👉🏼" })
    ] })
  ] }) });
};
const $$default = DashboardAdmin;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "DashboardAdmin");
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
const AdminHomepage = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default, {}),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default$1, {})
  ] });
};
export {
  AdminHomepage as default
};
