import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { _ as __vite_rsc_react__, r as registerClientReference, S as ScrollRestoration, O as Outlet } from "../index.js";
import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/layouts/public_layout.tsx"],
  RemoveDuplicateServerCss
);
const page = "_page_124yc_1";
const main = "_main_124yc_7";
const styles = {
  page,
  main
};
const Footer = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "8bf0354553f4", "default");
const Header = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "369c35ed1057", "default");
const PublicLayout = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.page, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("main", { className: styles.main, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Footer, {})
  ] });
};
const $$default = PublicLayout;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "PublicLayout");
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
