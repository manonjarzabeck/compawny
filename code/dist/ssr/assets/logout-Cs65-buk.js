import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const Logout = () => {
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    new SecurityService().logout();
    navigate("/authentification");
  }, [navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
};
const export_9f58dc29c4c4 = {
  default: Logout
};
export {
  export_9f58dc29c4c4
};
