import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { _ as __vite_rsc_react__, N as NavLink, r as registerClientReference, S as ScrollRestoration, O as Outlet } from "../index.js";
import __vite_rsc_assets_manifest__ from "../__vite_rsc_assets_manifest.js";
import { B as Btn } from "./Btn-D2406Z0r.js";
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
  __vite_rsc_assets_manifest__.serverResources["src/components/admin/adminHeader/adminHeader.tsx"],
  RemoveDuplicateServerCss
);
const adminHeader = "_adminHeader_jtjey_1";
const headerInner = "_headerInner_jtjey_7";
const logoLink = "_logoLink_jtjey_15";
const leftBlock = "_leftBlock_jtjey_26";
const rightBlock = "_rightBlock_jtjey_32";
const adminLogo = "_adminLogo_jtjey_37";
const titleBlock = "_titleBlock_jtjey_43";
const adminTitle = "_adminTitle_jtjey_48";
const adminSubtitle = "_adminSubtitle_jtjey_57";
const styles = {
  adminHeader,
  headerInner,
  logoLink,
  leftBlock,
  rightBlock,
  adminLogo,
  titleBlock,
  adminTitle,
  adminSubtitle
};
const AdminHeader = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("header", { className: styles.adminHeader, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.headerInner, children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(NavLink, { to: "/admin", className: styles.logoLink, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.leftBlock, children: [
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
        "img",
        {
          src: "/img/icons_logo/Compawny.png",
          alt: "Logo Compawny",
          className: styles.adminLogo
        }
      ),
      /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs("div", { className: styles.titleBlock, children: [
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h1", { className: styles.adminTitle, children: "Compawny" }),
        /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("h2", { className: styles.adminSubtitle, children: "Espace Admin" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("div", { className: styles.rightBlock, children: /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Btn, { link: "/", children: "Retourner sur le site 🐾" }) })
  ] }) });
};
const $$default = AdminHeader;
const $$wrap_$$default = /* @__PURE__ */ __vite_rsc_wrap_css__($$default, "AdminHeader");
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
const Guard = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "219e511e0ea7", "default");
const AdminLayout = () => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(Guard, { roles: ["admin"], children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx($$wrap_$$default, {}),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(Outlet, {})
  ] });
};
export {
  AdminLayout as default
};
