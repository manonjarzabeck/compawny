import { r as reactExports, u as useNavigate, j as jsxRuntimeExports } from "../index.js";
import { u as useForm } from "./index.esm-BEykbzPQ.js";
import { A as AssociationApiService } from "./association_api_service-D7LW581B.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { B as BackBtn } from "./backBtn-BHEboeJj.js";
import { s as styles } from "./admin_form_content.module-NyYRXaGt.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
import "./Btn-DqOqH5nc.js";
const AdminAssociationsFormContent = ({
  country,
  department,
  validator,
  dataToUpdate
}) => {
  const nameId = reactExports.useId();
  const descriptionId = reactExports.useId();
  const idId = reactExports.useId();
  const countryId = reactExports.useId();
  const departmentId = reactExports.useId();
  const imageId = reactExports.useId();
  const websiteId = reactExports.useId();
  const addressId = reactExports.useId();
  const emailId = reactExports.useId();
  const isInternationalId = reactExports.useId();
  const latitudeId = reactExports.useId();
  const longitudeId = reactExports.useId();
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
    formData.set("website", normalizedData.website);
    formData.set("address", normalizedData.address);
    formData.set("email", normalizedData.email);
    formData.set("latitude", normalizedData.latitude);
    formData.set("longitude", normalizedData.longitude);
    formData.set(
      "is_international",
      normalizedData.is_international ? "1" : "0"
    );
    formData.set("country_id", normalizedData.country_id);
    formData.set(
      "department_id",
      normalizedData.department_id
    );
    const process = dataToUpdate ? await new AssociationApiService().update(
      formData,
      new SecurityService().getToken()
    ) : await new AssociationApiService().insert(
      formData,
      new SecurityService().getToken()
    );
    if ([200, 201].includes(process.status)) {
      navigate("/admin/association-homepage", {
        state: {
          message: dataToUpdate ? "L'association a bien été modifiée." : "L'association a bien été ajoutée."
        }
      });
    } else if ([400].includes(process.status)) {
      setMessage(process.data);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackBtn, { fallbackLink: "/admin-association-homepage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.title, children: dataToUpdate ? "Modifier une association" : "Ajouter une association" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          className: styles.form,
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: addressId, children: "Adresse :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: addressId,
                  ...register("address", {
                    required: "L'adresse est obligatoire",
                    minLength: {
                      value: 20,
                      message: "L'adresse doit comporter, au minimum, 20 caractères"
                    },
                    maxLength: {
                      value: 150,
                      message: "L'adresse doit comporter, au maximum, 150 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.address?.message ?? serverErrors?.address
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: emailId, children: "Email :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: emailId,
                  ...register("email", {
                    required: "L'email est obligatoire",
                    minLength: {
                      value: 20,
                      message: "L'email doit comporter, au minimum, 20 caractères"
                    },
                    maxLength: {
                      value: 150,
                      message: "L'email doit comporter, au maximum, 150 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.email?.message ?? serverErrors?.email
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: websiteId, children: "Site Web :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: websiteId,
                  ...register("website", {
                    required: "Le site web est obligatoire",
                    minLength: {
                      value: 15,
                      message: "Le site web doit comporter, au minimum, 15 caractères"
                    },
                    maxLength: {
                      value: 100,
                      message: "Le site web doit comporter, au maximum, 100 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.website?.message ?? serverErrors?.website
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: websiteId, children: "Latitude :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: latitudeId,
                  ...register("latitude", {
                    required: "La latitude est obligatoire",
                    minLength: {
                      value: 5,
                      message: "La latitude doit comporter, au minimum, 5 caractères"
                    },
                    maxLength: {
                      value: 50,
                      message: "La longitude doit comporter, au maximum, 50 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.latitude?.message ?? serverErrors?.latitude
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: longitudeId, children: "Longitude :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: longitudeId,
                  ...register("longitude", {
                    required: "La longitude est obligatoire",
                    minLength: {
                      value: 5,
                      message: "La longitude doit comporter, au minimum, 5 caractères"
                    },
                    maxLength: {
                      value: 50,
                      message: "La longitude doit comporter, au maximum, 50 caractères"
                    }
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.longitude?.message ?? serverErrors?.longitude
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: countryId, children: "Pays :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  ...register("country_id", {
                    required: "Le pays est obligatoire",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Veuillez sélectionner un pays"
                    }
                  }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sélectionner un pays" }),
                    country.map((item) => {
                      return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id);
                    })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { role: "alert", children: [
                " ",
                errors.country_id?.message
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.field, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: departmentId, children: "Département :" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("department_id"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sélectionner un département" }),
                department.map((item) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id);
                })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.checkboxRow, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: isInternationalId, children: "En ligne" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  id: isInternationalId,
                  ...register("is_international")
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
const export_8b5427f87d64 = {
  default: AdminAssociationsFormContent
};
export {
  export_8b5427f87d64
};
