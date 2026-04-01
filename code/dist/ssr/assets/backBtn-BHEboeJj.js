import { u as useNavigate, j as jsxRuntimeExports } from "../index.js";
import { B as Btn } from "./Btn-DqOqH5nc.js";
const BackBtn = ({
  fallbackLink = "/",
  children = "Retour",
  variant = "default"
}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackLink);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { margin: "0.8rem 0 0.4rem 0.8rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { onClick: handleBack, variant, children }) });
};
export {
  BackBtn as B
};
