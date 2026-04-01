import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { _ as __vite_rsc_react__, r as registerClientReference, a as react_reactServerExports } from "../index.js";
import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/components/association/association-details/association_details_content.tsx"],
  RemoveDuplicateServerCss
);
const MapLibre = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "1b630ac21dae", "default");
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
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(jsxRuntime_reactServerExports.Fragment, { children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("section", { className: styles.card, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.topSection, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.infos, children: [
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h2", { className: styles.name, children: data.name }),
        data.introduction && /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.introduction, children: data.introduction }),
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.description, children: data.description }),
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.contact, children: [
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("strong", { children: "Email :" }),
            " ",
            data.email
          ] }),
          /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("strong", { children: "Site :" }),
            " ",
            /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("a", { href: data.website, target: "_blank", rel: "noreferrer", children: data.website })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.imageWrapper, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "img",
        {
          src: `/img/association/${data.image}`,
          alt: data.name,
          className: styles.image
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.mapContainer, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
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
const $$default = AssociationDetailsContent;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "AssociationDetailsContent");
function __vite_rsc_wrap_css__(value, name2) {
  if (typeof value !== "function") return value;
  function __wrapper(props) {
    return __vite_rsc_react__.createElement(
      __vite_rsc_react__.Fragment,
      null,
      __vite_rsc_react__.createElement(Resources),
      __vite_rsc_react__.createElement(value, props)
    );
  }
  Object.defineProperty(__wrapper, "name", { value: name2 });
  return __wrapper;
}
const AssociationDetailPage = ({ params }) => {
  const { id } = params;
  const result = react_reactServerExports.use(new AssociationApiService().selectOne(id));
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Associations",
        description: "Détails des Associations internationales",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default, { data: result.data })
  ] });
};
export {
  AssociationDetailPage as default
};
