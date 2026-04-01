import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const overlay = "_overlay_ggld8_1";
const modal = "_modal_ggld8_12";
const title = "_title_ggld8_25";
const text = "_text_ggld8_32";
const warning = "_warning_ggld8_40";
const actions = "_actions_ggld8_48";
const btn = "_btn_ggld8_56";
const cancelBtn = "_cancelBtn_ggld8_79";
const deleteBtn = "_deleteBtn_ggld8_88";
const styles = {
  overlay,
  modal,
  title,
  text,
  warning,
  actions,
  btn,
  cancelBtn,
  deleteBtn
};
const AdminActionDelete = ({ params }) => {
  const { id } = params;
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const handleCancel = () => {
    navigate("/admin/action-homepage");
  };
  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      const result = await new ActionApiService().delete(
        { id },
        new SecurityService().getToken()
      );
      if ([200, 201].includes(result.status)) {
        navigate("/admin/action-homepage", {
          state: { message: "L'action a bien été supprimée." }
        });
        return;
      }
      navigate("/admin/action-homepage", {
        state: { message: "Une erreur est survenue lors de la suppression." }
      });
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      navigate("/admin/action-homepage", {
        state: { message: "Une erreur est survenue lors de la suppression." }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.overlay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.modal, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.title, children: "Confirmer la suppression" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.text, children: "Êtes-vous sûr de vouloir supprimer cette action ?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.warning, children: "Cette opération est irréversible." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.actions, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: `${styles.btn} ${styles.cancelBtn}`,
          onClick: handleCancel,
          disabled: loading,
          children: "Annuler"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: `${styles.btn} ${styles.deleteBtn}`,
          onClick: handleConfirmDelete,
          disabled: loading,
          children: loading ? "Suppression..." : "Confirmer la suppression"
        }
      )
    ] })
  ] }) });
};
const export_ed29a01200a6 = {
  default: AdminActionDelete
};
export {
  export_ed29a01200a6
};
