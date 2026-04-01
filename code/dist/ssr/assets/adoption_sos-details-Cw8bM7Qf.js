import { j as jsxRuntimeExports } from "../index.js";
import { f as formatDateFR, A as AssociationDetailsContent } from "./association_details_content-11XM0YHH.js";
import { B as BackBtn } from "./backBtn-BHEboeJj.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "./maplibre-DGjkt47v.js";
import "maplibre-gl";
import "./Btn-DqOqH5nc.js";
const container = "_container_idp2n_2";
const grid = "_grid_idp2n_10";
const card = "_card_idp2n_18";
const cardInner = "_cardInner_idp2n_30";
const cardPrimary = "_cardPrimary_idp2n_39";
const imageWrapper = "_imageWrapper_idp2n_45";
const title = "_title_idp2n_62";
const description = "_description_idp2n_72";
const date = "_date_idp2n_83";
const associationWrapper = "_associationWrapper_idp2n_93";
const style = {
  container,
  grid,
  card,
  cardInner,
  cardPrimary,
  imageWrapper,
  title,
  description,
  date,
  associationWrapper
};
const AdoptionDetailsContent = ({ data }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackBtn, { fallbackLink: "/adoptions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: style.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style.grid, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${style.card} ${style.cardPrimary}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style.cardInner, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: style.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/img/adoption/${data.image}`, alt: data.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: style.title, children: [
          "🤎 ",
          data.name,
          " 🤎"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: style.description, children: data.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: style.date, children: [
          "Cet adorable compagnon attend sa famille au sein de l’association ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: data.association.name }),
          " depuis le",
          " ",
          formatDateFR(data.arrival),
          " 🫶🏼"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: style.associationWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AssociationDetailsContent,
        {
          data: data.association,
          zoom: 10,
          mapStyle: "https://tiles.openfreemap.org/styles/bright"
        }
      ) })
    ] }) })
  ] });
};
const export_ccba641e47ea = {
  default: AdoptionDetailsContent
};
export {
  export_ccba641e47ea
};
