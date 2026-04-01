import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
const AdminAdoptionDelete = ({ params }) => {
  const { id } = params;
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    new AdoptionApiService().delete({ id }).then(() => {
      navigate("/admin");
      return;
    });
  }, [id, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Gestion des adoptions - Supression " });
};
const export_1f41c3927cbf = {
  default: AdminAdoptionDelete
};
export {
  export_1f41c3927cbf
};
