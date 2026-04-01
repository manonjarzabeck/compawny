import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
const AdminAssociationDelete = ({ params }) => {
  const { id } = params;
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    new AssociationApiService().delete({ id }).then(() => {
      navigate("/admin");
      return;
    });
  }, [id, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Gestion des associations - Supression " });
};
const export_ef0b8f4e032e = {
  default: AdminAssociationDelete
};
export {
  export_ef0b8f4e032e
};
