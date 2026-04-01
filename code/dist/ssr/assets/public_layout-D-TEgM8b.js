import { j as jsxRuntimeExports, N as NavLink, r as reactExports, c as useLocation } from "../index.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { B as Btn } from "./Btn-DqOqH5nc.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const footer = "_footer_9s8zj_1";
const brand = "_brand_9s8zj_11";
const legal = "_legal_9s8zj_17";
const styles$2 = {
  footer,
  brand,
  legal
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: styles$2.footer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.brand, children: "Ⓒ Compawny -" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/mentions", className: styles$2.legal, children: "Mentions légales" }),
    // si l'utilisateur est admin
    new SecurityService().getUser()?.role.name === "admin" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "-" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/admin", className: styles$2.legal, children: "Espace Admin 🔐" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
  ] });
};
const navbar = "_navbar_edqz7_1";
const desktopNav = "_desktopNav_edqz7_9";
const navLink = "_navLink_edqz7_20";
const dropdownInline = "_dropdownInline_edqz7_37";
const open = "_open_edqz7_49";
const closed = "_closed_edqz7_54";
const dropdownLink = "_dropdownLink_edqz7_59";
const mobileNav = "_mobileNav_edqz7_77";
const mobileMenuButton = "_mobileMenuButton_edqz7_82";
const mobilePanel = "_mobilePanel_edqz7_98";
const mobileGuideBlock = "_mobileGuideBlock_edqz7_113";
const mobileGuideTitle = "_mobileGuideTitle_edqz7_121";
const mobileGuideLinks = "_mobileGuideLinks_edqz7_129";
const mobileSubLink = "_mobileSubLink_edqz7_136";
const mobileMainLink = "_mobileMainLink_edqz7_145";
const styles$1 = {
  navbar,
  desktopNav,
  navLink,
  dropdownInline,
  open,
  closed,
  dropdownLink,
  mobileNav,
  mobileMenuButton,
  mobilePanel,
  mobileGuideBlock,
  mobileGuideTitle,
  mobileGuideLinks,
  mobileSubLink,
  mobileMainLink
};
const NavBar = ({ personalLink }) => {
  const [isGuideOpen, setIsGuideOpen] = reactExports.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const location = useLocation();
  const toggleGuideDropdown = () => {
    setIsGuideOpen((prev) => !prev);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const closeMenus = () => {
    setIsGuideOpen(false);
    setIsMobileMenuOpen(false);
  };
  reactExports.useEffect(() => {
    closeMenus();
  }, [location]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: styles$1.navbar, "aria-label": "Navigation principale", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.desktopNav, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: styles$1.navLink,
          onClick: toggleGuideDropdown,
          "aria-expanded": isGuideOpen,
          children: [
            "Le guide du bénévole ",
            isGuideOpen ? "👈🏼" : "👉🏼"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${styles$1.dropdownInline} ${isGuideOpen ? styles$1.open : styles$1.closed}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                to: "/actions",
                className: styles$1.dropdownLink,
                onClick: closeMenus,
                children: "Découvrir les actions locales ❣️"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                to: "/associations",
                className: styles$1.dropdownLink,
                onClick: closeMenus,
                children: "Explorer les associations 🌎"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                to: "/adoptions",
                className: styles$1.dropdownLink,
                onClick: closeMenus,
                children: "Voir les animaux à l’adoption 🐾"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/contact", className: styles$1.navLink, onClick: closeMenus, children: "Ils en parlent 💭" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.mobileNav, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: styles$1.mobileMenuButton,
          onClick: toggleMobileMenu,
          "aria-expanded": isMobileMenuOpen,
          "aria-label": "Ouvrir ou fermer le menu",
          children: isMobileMenuOpen ? "✕" : "☰"
        }
      ),
      isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.mobilePanel, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.mobileGuideBlock, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.mobileGuideTitle, children: "Le guide du bénévole" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.mobileGuideLinks, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                to: "/actions",
                className: styles$1.mobileSubLink,
                onClick: closeMenus,
                children: "Découvrir les actions locales ❣️"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                to: "/associations",
                className: styles$1.mobileSubLink,
                onClick: closeMenus,
                children: "Explorer les associations 🌎"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                to: "/adoptions",
                className: styles$1.mobileSubLink,
                onClick: closeMenus,
                children: "Voir les animaux à l’adoption 🐾"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavLink,
          {
            to: "/contact",
            className: styles$1.mobileMainLink,
            onClick: closeMenus,
            children: "Ils en parlent 💭"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavLink,
          {
            to: personalLink,
            className: styles$1.mobileMainLink,
            onClick: closeMenus,
            children: "Mon espace personnel 👤"
          }
        )
      ] })
    ] })
  ] });
};
const publicHeader = "_publicHeader_1dn5f_1";
const headerInner = "_headerInner_1dn5f_8";
const publicBrand = "_publicBrand_1dn5f_17";
const logoLink = "_logoLink_1dn5f_23";
const publicLogo = "_publicLogo_1dn5f_36";
const publicTitle = "_publicTitle_1dn5f_43";
const navWrapper = "_navWrapper_1dn5f_51";
const desktopCta = "_desktopCta_1dn5f_60";
const styles = {
  publicHeader,
  headerInner,
  publicBrand,
  logoLink,
  publicLogo,
  publicTitle,
  navWrapper,
  desktopCta
};
const Header = () => {
  const user = new SecurityService().getUser();
  const personalLink = user ? "/espace-utilisateur" : "/authentification";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: styles.publicHeader, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.headerInner, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.publicBrand, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavLink, { to: "/", className: styles.logoLink, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/img/icons_logo/Compawny.png",
          alt: "Logo Compawny",
          className: styles.publicLogo
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.publicTitle, children: "Compawny" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.navWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, { personalLink }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.desktopCta, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { link: personalLink, children: "Mon espace personnel 👤" }) })
  ] }) });
};
const export_8bf0354553f4 = {
  default: Footer
};
const export_369c35ed1057 = {
  default: Header
};
export {
  export_369c35ed1057,
  export_8bf0354553f4
};
