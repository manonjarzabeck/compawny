import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { _ as __vite_rsc_react__ } from "../index.js";
import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { B as Btn } from "./Btn-D2406Z0r.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/components/intro-pages/intro-pages.tsx"],
  RemoveDuplicateServerCss
);
const backBtnWrapper = "_backBtnWrapper_14sf7_1";
const section = "_section_14sf7_12";
const container = "_container_14sf7_20";
const image = "_image_14sf7_30";
const title = "_title_14sf7_40";
const text = "_text_14sf7_48";
const styles = {
  backBtnWrapper,
  section,
  container,
  image,
  title,
  text
};
const IntroPage = ({ image: image2, title: title2, description, alt }) => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("section", { className: styles.section, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.backBtnWrapper, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/", children: "Retour à l'accueil" }) }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.container, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "img",
        {
          src: image2,
          alt: alt || "Illustration de la section",
          className: styles.image
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h3", { className: styles.title, children: title2 }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("p", { className: styles.text, children: description })
    ] })
  ] });
};
const $$default = IntroPage;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "IntroPage");
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
  $$wrap_$$default as $
};
