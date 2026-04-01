import { r as reactExports, u as useNavigate, j as jsxRuntimeExports } from "../index.js";
import { u as useForm } from "./index.esm-BEykbzPQ.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
class SecurityApiService {
  // préfixe de l'API
  prefix = "/api";
  register = async (data) => {
    const request = new Request(
      `${void 0}${this.prefix}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  login = async (data) => {
    const request = new Request(
      `${void 0}${this.prefix}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
}
const formCard = "_formCard_40vth_44";
const title = "_title_40vth_55";
const formGroup = "_formGroup_40vth_68";
const primaryButton = "_primaryButton_40vth_103";
const errorMessage = "_errorMessage_40vth_125";
const styles = {
  formCard,
  title,
  formGroup,
  primaryButton,
  errorMessage
};
const LoginForm = () => {
  const emailId = reactExports.useId();
  const passwordId = reactExports.useId();
  const navigate = useNavigate();
  const [message, setMessage] = reactExports.useState("");
  const [serverErrors, setServerErrors] = reactExports.useState({});
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const submitForm = async (data) => {
    setServerErrors({});
    const process = await new SecurityApiService().login(data);
    if ([200, 201].includes(process.status)) {
      const user = process.data;
      new SecurityService().setUser(user);
      await new SecurityService().setToken(user);
      if (user.role.name === "admin") {
        navigate("/admin");
        return;
      }
      navigate("/espace-utilisateur");
    } else if ([400, 401, 403].includes(process.status)) {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: styles.formCard, onSubmit: handleSubmit(submitForm), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.title, children: "Connexion" }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.formGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: emailId, children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          id: emailId,
          ...register("email", {
            required: "L’email est requis."
          }),
          placeholder: "exemple@mail.com"
        }
      ),
      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: errors.email.message }),
      serverErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: serverErrors.email })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.formGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: passwordId, children: "Mot de passe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "password",
          id: passwordId,
          ...register("password", {
            required: "Le mot de passe est requis."
          }),
          placeholder: "••••••••"
        }
      ),
      errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: errors.password.message }),
      serverErrors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: serverErrors.password })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: styles.primaryButton, children: "Se connecter" })
  ] });
};
const RegisterForm = () => {
  const emailId = reactExports.useId();
  const passwordId = reactExports.useId();
  const [message, setMessage] = reactExports.useState("");
  const [serverErrors, setServerErrors] = reactExports.useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const submitForm = async (data) => {
    setServerErrors({});
    const process = await new SecurityApiService().register(data);
    if ([200, 201].includes(process.status)) {
      setMessage("Votre compte à bien été créé !");
      reset();
    } else if ([400].includes(process.status)) {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: styles.formCard, onSubmit: handleSubmit(submitForm), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.title, children: "Créer un compte" }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.formGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: emailId, children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          id: emailId,
          ...register("email", {
            required: "L’email est requis."
          }),
          placeholder: "exemple@mail.com"
        }
      ),
      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: errors.email.message }),
      serverErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: serverErrors.email })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.formGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: passwordId, children: "Mot de passe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "password",
          id: passwordId,
          ...register("password", {
            required: "Le mot de passe est requis."
          }),
          placeholder: "••••••••"
        }
      ),
      errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: errors.password.message }),
      serverErrors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.errorMessage, children: serverErrors.password })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: styles.primaryButton, children: "Créer mon compte" })
  ] });
};
const export_86f3a7b02e65 = {
  default: LoginForm
};
const export_bcfd68a6dc01 = {
  default: RegisterForm
};
export {
  export_86f3a7b02e65,
  export_bcfd68a6dc01
};
