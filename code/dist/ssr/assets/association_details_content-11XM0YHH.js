import { j as jsxRuntimeExports } from "../index.js";
import { M as MapLibre } from "./maplibre-DGjkt47v.js";
const formatDateFR = (date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};
const card = "_card_n2tvk_1";
const name = "_name_n2tvk_16";
const topSection = "_topSection_n2tvk_27";
const imageWrapper = "_imageWrapper_n2tvk_37";
const image = "_image_n2tvk_37";
const infos = "_infos_n2tvk_54";
const introduction = "_introduction_n2tvk_65";
const description = "_description_n2tvk_72";
const contact = "_contact_n2tvk_79";
const mapContainer = "_mapContainer_n2tvk_103";
const styles = {
  card,
  name,
  topSection,
  imageWrapper,
  image,
  infos,
  introduction,
  description,
  contact,
  mapContainer
};
const AssociationDetailsContent = ({
  data,
  zoom = 4,
  mapStyle
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles.card, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.topSection, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.infos, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.name, children: data.name }),
        data.introduction && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.introduction, children: data.introduction }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.description, children: data.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.contact, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Email :" }),
            " ",
            data.email
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Site :" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: data.website, target: "_blank", rel: "noreferrer", children: data.website })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `/img/association/${data.image}`,
          alt: data.name,
          className: styles.image
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.mapContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MapLibre,
      {
        latitude: data.latitude,
        longitude: data.longitude,
        zoom,
        mapStyle,
        height: "320px"
      }
    ) })
  ] }) });
};
export {
  AssociationDetailsContent as A,
  formatDateFR as f
};
