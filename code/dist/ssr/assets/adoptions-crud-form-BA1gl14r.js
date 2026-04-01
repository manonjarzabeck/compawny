import { r as reactExports, u as useNavigate, j as jsxRuntimeExports } from "../index.js";
import { u as useForm } from "./index.esm-BEykbzPQ.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { B as BackBtn } from "./backBtn-BHEboeJj.js";
import { s as styles } from "./admin_form_content.module-NyYRXaGt.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
import "./Btn-DqOqH5nc.js";
const AdminAdoptionsFormContent = ({
  association,
  species,
  validator,
  dataToUpdate
}) => {
  const idId = reactExports.useId();
  const nameId = reactExports.useId();
  const imageId = reactExports.useId();
  const arrivalId = reactExports.useId();
  const descriptionId = reactExports.useId();
  const is_adoptableId = reactExports.useId();
  const associationId = reactExports.useId();
  const speciesId = reactExports.useId();
  const [serverErrors, setServerErrors] = reactExports.useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  reactExports.useEffect(() => {
    if (dataToUpdate) {
      const normalizedData = { ...dataToUpdate };
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
    formData.set("arrival", normalizedData.arrival);
    formData.set("is_adoptable", normalizedData.is_adoptable ? "1" : "0");
    formData.set(
      "association_id",
      normalizedData.association_id
    );
    formData.set("species_id", normalizedData.species_id);
    const process = dataToUpdate ? await new AdoptionApiService().update(
      formData,
      new SecurityService().getToken()
    ) : await new AdoptionApiService().insert(
      formData,
      new SecurityService().getToken()
    );
    if ([200, 201].includes(process.status)) {
      navigate("/admin/adoption-homepage", {
        state: {
          message: dataToUpdate ? "L'adoption SOS a bien été modifiée." : "L'adoption SOS a bien été ajoutée."
        }
      });
    } else if ([400].includes(process.status)) {
      setMessage(process.data);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackBtn, { fallbackLink: "/admin-adoption-homepage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.title, children: dataToUpdate ? "Modifier une adoption SOS" : "Ajouter une adoption SOS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          encType: "multipart/form-data",
          onSubmit: handleSubmit(submitForm),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: nameId, children: "Nom :" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.name?.message ?? serverErrors?.name
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: imageId, children: "Image :" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.image?.message ?? serverErrors?.image
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: arrivalId, children: "Date d'entrée au refuge :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  id: arrivalId,
                  ...register("arrival", {
                    required: "La date d'entrée au refuge est obligatoire"
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.arrival?.message ?? serverErrors?.arrival?.toString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: descriptionId, children: "Description :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: descriptionId,
                  ...register("description", {
                    required: "La description est obligatoire",
                    minLength: {
                      value: 2,
                      message: "La description doit comporter, au minimum, 20 caractères"
                    },
                    maxLength: {
                      value: 300,
                      message: "La description doit comporter, au maximum, 300 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.description?.message ?? serverErrors?.description
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: associationId, children: "Association :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.association_id?.message
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: speciesId, children: "Espèce :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  ...register("species_id", {
                    required: "L'espèce est obligatoire",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Veuillez sélectionner une espèce"
                    }
                  }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sélectionner une espèce" }),
                    species.map((item) => {
                      return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id);
                    })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.species_id?.message
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.checkboxRow, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: is_adoptableId, children: "À l'adoption :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  id: is_adoptableId,
                  ...register("is_adoptable")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", ...register("id"), id: idId }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles.submitButton, type: "submit", children: "Soumettre" }),
            message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: message })
          ]
        }
      )
    ] }) })
  ] });
};
const export_0a639f88c1f5 = {
  default: AdminAdoptionsFormContent
};
export {
  export_0a639f88c1f5
};
