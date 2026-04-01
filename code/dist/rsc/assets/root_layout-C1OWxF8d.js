import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { _ as __vite_rsc_react__, O as Outlet } from "../index.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/layouts/root_layout.tsx"],
  RemoveDuplicateServerCss
);
const RootLayout = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { charSet: "UTF-8" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("link", { rel: "icon", href: "/favicon.ico", sizes: "any" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/img/icons_logo/favicon-32x32.png"
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/img/icons_logo/favicon-16x16.png"
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "link",
        {
          rel: "apple-touch-icon",
          href: "/img/icons_logo/favicon-180x180.png"
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Nunito:wght@400;600;700&display=swap"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("body", { children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Outlet, {}) })
  ] });
};
const $$default = RootLayout;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "RootLayout");
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
