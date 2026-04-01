import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const Guard = ({ roles, children }) => {
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const user = new SecurityService().getUser();
    if (roles.indexOf(user?.role?.name) === -1) {
      navigate("/");
    }
  }, [roles.indexOf, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
const export_219e511e0ea7 = {
  default: Guard
};
export {
  export_219e511e0ea7
};
