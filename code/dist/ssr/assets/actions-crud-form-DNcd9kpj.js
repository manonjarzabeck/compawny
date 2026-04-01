import { r as reactExports, u as useNavigate, j as jsxRuntimeExports } from "../index.js";
import { u as useForm } from "./index.esm-BEykbzPQ.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { B as BackBtn } from "./backBtn-BHEboeJj.js";
import { s as styles } from "./admin_form_content.module-NyYRXaGt.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
import "./Btn-DqOqH5nc.js";
const AdminActionsFormContent = ({
  association,
  validator,
  dataToUpdate
}) => {
  const nameId = reactExports.useId();
  const descriptionId = reactExports.useId();
  const isactiveId = reactExports.useId();
  const idId = reactExports.useId();
  const associationId = reactExports.useId();
  const imageId = reactExports.useId();
  const publishedId = reactExports.useId();
  const [serverErrors, setServerErrors] = reactExports.useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  reactExports.useEffect(() => {
    if (dataToUpdate) {
      const normalizedData = {
        ...dataToUpdate,
        published: dataToUpdate.published ? new Date(dataToUpdate.published).toISOString().split("T")[0] : ""
      };
      reset(normalizedData);
    }
  }, [dataToUpdate, reset]);
  const [message, setMessage] = reactExports.useState("");
  const navigate = useNavigate();
  const submitForm = async (data) => {
    const normalizedData = { ...data, image: data.image[0] };
    const validation = await validator(normalizedData);
    if (validation instanceof Error) {
      let errors2 = {};
      JSON.parse(validation.message).map((item) => {
        errors2 = { ...errors2, [item.path.shift()]: item.message };
        return errors2;
      });
      setServerErrors(errors2);
      return;
    }
    const formData = new FormData();
    formData.set("id", normalizedData.id);
    formData.set("name", normalizedData.name);
    formData.set("image", normalizedData.image);
    formData.set(
      "description",
      normalizedData.description
    );
    formData.set("published", normalizedData.published);
    formData.set("is_active", normalizedData.is_active ? "1" : "0");
    formData.set(
      "association_id",
      normalizedData.association_id
    );
    const process = dataToUpdate ? await new ActionApiService().update(
      formData,
      new SecurityService().getToken()
    ) : await new ActionApiService().insert(
      formData,
      new SecurityService().getToken()
    );
    if ([200, 201].includes(process.status)) {
      navigate("/admin/action-homepage", {
        state: {
          message: dataToUpdate ? "L'action a bien été modifiée." : "L'action a bien été ajoutée."
        }
      });
    } else if ([400].includes(process.status)) {
      setMessage(process.data);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackBtn, { fallbackLink: "/admin-action-homepage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.title, children: dataToUpdate ? "Modifier une action" : "Ajouter une action" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          className: styles.form,
          encType: "multipart/form-data",
          onSubmit: handleSubmit(submitForm),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: nameId, children: "Nom" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: nameId,
                  ...register("name", {
                    required: "Le nom est obligatoire",
                    minLength: {
                      value: 2,
                      message: "Un nom doit comporter, au minimum, 2 caractères"
                    },
                    maxLength: {
                      value: 50,
                      message: "Un nom doit comporter, au maximum, 50 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { role: "alert", children: errors.name?.message ?? serverErrors?.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: imageId, children: "Image" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  id: imageId,
                  ...register(
                    "image",
                    dataToUpdate ? {} : {
                      required: "L'image est obligatoire"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { role: "alert", children: errors.image?.message ?? serverErrors?.image })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: descriptionId, children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: descriptionId,
                  rows: 6,
                  ...register("description", {
                    required: "La description est obligatoire",
                    minLength: {
                      value: 20,
                      message: "La description doit comporter, au minimum, 20 caractères"
                    },
                    maxLength: {
                      value: 300,
                      message: "La description doit comporter, au maximum, 300 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { role: "alert", children: errors.description?.message ?? serverErrors?.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: publishedId, children: "Date de publication" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  id: publishedId,
                  ...register(
                    "published",
                    dataToUpdate ? {} : {
                      required: "La date de publication est obligatoire"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { role: "alert", children: errors.published?.message ?? serverErrors?.published?.toString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: associationId, children: "Association" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: associationId,
                  ...register("association_id", {
                    required: "L'association est obligatoire",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Veuillez sélectionner une association"
                    }
                  }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sélectionner une association" }),
                    association.map((item) => {
                      return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id);
                    })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { role: "alert", children: errors.association_id?.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.checkboxRow, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: isactiveId, children: "En ligne" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  id: isactiveId,
                  ...register("is_active")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", id: idId, ...register("id") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles.submitButton, type: "submit", children: "Soumettre" }),
            message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: message })
          ]
        }
      )
    ] }) })
  ] });
};
const export_9dd3d2a6e2bf = {
  default: AdminActionsFormContent
};
export {
  export_9dd3d2a6e2bf
};
