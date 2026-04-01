import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { _ as __vite_rsc_react__, a as react_reactServerExports } from "../index.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import { B as Btn } from "./Btn-D2406Z0r.js";
import { $ as $$wrap_$$default$2 } from "./intro-pages-B-Q4sbDg.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/components/association/association-list/association_list.tsx"],
  RemoveDuplicateServerCss$1
);
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
  __vite_rsc_assets_manifest__.serverResources["src/components/association/association-list-item/association_list_item.tsx"],
  RemoveDuplicateServerCss
);
const card = "_card_14hnb_1";
const cardInner = "_cardInner_14hnb_11";
const imageWrapper = "_imageWrapper_14hnb_25";
const title = "_title_14hnb_45";
const introduction = "_introduction_14hnb_55";
const country = "_country_14hnb_64";
const style$1 = {
  card,
  cardInner,
  imageWrapper,
  title,
  introduction,
  country
};
const AssociationListItem = ({ data }) => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("article", { className: style$1.card, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: style$1.cardInner, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: style$1.imageWrapper, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("img", { src: `/img/association/${data.image}`, alt: data.name }) }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h2", { className: style$1.title, children: data.name }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: style$1.introduction, children: data.introduction }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("p", { className: style$1.country, children: [
      "📍 ",
      data.country.name
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: `/associations/${data.id}`, children: "En savoir plus 🤎" })
  ] }) });
};
const $$default$1 = AssociationListItem;
const $$wrap_$$default$1 = /* @__PURE__ */ __vite_rsc_wrap_css__$1($$default$1, "AssociationListItem");
function __vite_rsc_wrap_css__$1(value, name) {
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
const grid = "_grid_ezxoa_1";
const style = {
  grid
};
const AssoList = () => {
  const results = react_reactServerExports.use(
    new AssociationApiService().selectAll()
  );
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("section", { className: style.grid, children: results.data?.filter((item) => item.is_international).map((item) => (
    // item est passé en props
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default$1, { data: item }, item.id)
  )) });
};
const $$default = AssoList;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "AssoList");
function __vite_rsc_wrap_css__(value, name) {
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
const AssoMondePage = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Associations internationales",
        description: "Liste des associations internationales pour la protection des animaux",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      $$wrap_$$default$2,
      {
        image: "/img/pages/Association.png",
        alt: "Dessin bénévoles animaliers de la section Associations Internationales",
        title: "Parce que la solidarité n’a pas de frontières 🫶🏼",
        description: "La protection animale est un combat mondial qui nécessite des\n					engagements forts et solidaires. À travers différents pays, des\n					associations agissent concrètement pour défendre les droits et la\n					dignité des animaux. Tu peux les découvrir ici et soutenir celles qui\n					résonnent avec tes valeurs."
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default, {})
  ] });
};
export {
  AssoMondePage as default
};
