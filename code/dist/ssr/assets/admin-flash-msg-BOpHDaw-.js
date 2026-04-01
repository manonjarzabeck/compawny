import { c as useLocation, j as jsxRuntimeExports } from "../index.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
const message = "_message_17iza_1";
const styles = {
  message
};
const AdminFlashMessage = () => {
  const location = useLocation();
  const message2 = location.state?.message;
  if (!message2) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: message2 });
};
const export_f46a2dbec5ad = {
  default: AdminFlashMessage
};
export {
  export_f46a2dbec5ad
};
