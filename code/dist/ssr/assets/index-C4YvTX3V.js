import { r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { u as useForm } from "./index.esm-BEykbzPQ.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const formCard = "_formCard_vjeh5_1";
const form = "_form_vjeh5_1";
const field = "_field_vjeh5_16";
const submitButton = "_submitButton_vjeh5_64";
const feedbackMessage = "_feedbackMessage_vjeh5_84";
const successBox = "_successBox_vjeh5_89";
const successText = "_successText_vjeh5_95";
const styles$1 = {
  formCard,
  form,
  field,
  submitButton,
  feedbackMessage,
  successBox,
  successText
};
const UserActionForm = ({ validator }) => {
  const nameId = reactExports.useId();
  const descriptionId = reactExports.useId();
  const associationProposalId = reactExports.useId();
  const [message, setMessage] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [serverErrors, setServerErrors] = reactExports.useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const submitForm = async (data) => {
    const normalizedData = { ...data };
    const validation = await validator(normalizedData);
    if (validation instanceof Error) {
      let formErrors = {};
      JSON.parse(validation.message).map((item) => {
        formErrors = {
          ...formErrors,
          [item.path.shift()]: item.message
        };
        return formErrors;
      });
      setServerErrors(formErrors);
      return;
    }
    setServerErrors({});
    const formData = new FormData();
    formData.set("name", normalizedData.name);
    formData.set("description", normalizedData.description);
    formData.set(
      "association_proposal",
      normalizedData.association_proposal
    );
    formData.set("is_active", "0");
    formData.set("source", "visitor");
    formData.set("published", "");
    formData.set("association_id", "");
    const process = await new ActionApiService().insert(
      formData,
      new SecurityService().getToken()
    );
    if ([200, 201].includes(process.status)) {
      setMessage("Notre équipe de modération va s'occuper du reste 🐾");
      setSubmitted(true);
      reset();
    } else {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.formCard, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.successBox, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$1.formTitle, children: "Merci beaucoup 💚" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.successText, children: message })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.formCard, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: styles$1.form, onSubmit: handleSubmit(submitForm), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.field, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: nameId, children: "Nom de l'action" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          id: nameId,
          placeholder: "Ex. : Collecte de croquettes solidaire",
          ...register("name", {
            required: "Le nom est obligatoire",
            minLength: {
              value: 2,
              message: "Minimum 2 caractères"
            }
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: errors.name?.message ?? serverErrors?.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.field, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: associationProposalId, children: "Nom de l'association" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          id: associationProposalId,
          placeholder: "Ex. : Les Pattes du Cœur",
          ...register("association_proposal", {
            required: "Le nom de l'association est obligatoire",
            minLength: {
              value: 2,
              message: "Minimum 2 caractères"
            }
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: errors.association_proposal?.message ?? serverErrors?.association_proposal })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.field, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: descriptionId, children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: descriptionId,
          rows: 6,
          placeholder: "Décrivez l'action, le lieu, le fonctionnement, ou toute information utile...",
          ...register("description", {
            required: "La description est obligatoire",
            minLength: {
              value: 20,
              message: "Minimum 20 caractères"
            }
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: errors.description?.message ?? serverErrors?.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.submitButton, type: "submit", children: "Proposer une action 🫶🏼" }),
    message && !submitted && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.feedbackMessage, children: message })
  ] }) });
};
const scrollBtn = "_scrollBtn_1wx3s_1";
const styles = {
  scrollBtn
};
const ScrollButton = () => {
  const handleScroll = () => {
    const target = document.getElementById("guide");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: styles.scrollBtn,
      onClick: handleScroll,
      "aria-label": "Faire défiler sur la section suivante = Le guide du bénévole",
      children: "↓"
    }
  );
};
const export_edff85eaaae7 = {
  default: UserActionForm
};
const export_1a3bbb3d5a23 = {
  default: ScrollButton
};
export {
  export_1a3bbb3d5a23,
  export_edff85eaaae7
};
