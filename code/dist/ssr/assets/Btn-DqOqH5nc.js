import { j as jsxRuntimeExports, N as NavLink } from "../index.js";
const BtnSection = "_BtnSection_1j4de_1";
const Btn$1 = "_Btn_1j4de_1";
const homepage = "_homepage_1j4de_29";
const styles = {
  BtnSection,
  Btn: Btn$1,
  homepage
};
const Btn = ({ link, onClick, children, variant = "default" }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.BtnSection, children: onClick ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: `${styles.Btn} ${styles[variant]}`,
      children
    }
  ) : link ? /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: link, className: `${styles.Btn} ${styles[variant]}`, children }) : null });
};
export {
  Btn as B
};
