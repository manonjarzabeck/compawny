import { r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { B as Btn } from "./Btn-DqOqH5nc.js";
import { u as useForm } from "./index.esm-BEykbzPQ.js";
import { C as ContactApiService } from "./contact_api_service-BnD84ebE.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
const form = "_form_dghf3_1";
const error = "_error_dghf3_58";
const feedback = "_feedback_dghf3_65";
const styles$1 = {
  form,
  error,
  feedback
};
const ContactForm = () => {
  const [message, setMessage] = reactExports.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();
  const submitForm = async (data) => {
    setMessage("");
    try {
      const process = await new ContactApiService().insert(data);
      if ([200, 201].includes(process.status)) {
        setMessage("Merci pour votre témoignage 💛");
        reset();
      } else {
        setMessage("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error2) {
      console.error("Erreur lors de l'envoi du formulaire :", error2);
      setMessage("Une erreur est survenue, veuillez réessayer.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(submitForm), className: styles$1.form, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", children: "Nom" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        id: "name",
        placeholder: "Votre prénom",
        ...register("name", {
          required: "Le prénom est requis"
        })
      }
    ),
    errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.error, children: errors.name.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", children: "Email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "email",
        id: "email",
        placeholder: "exemple@email.com",
        ...register("email", {
          required: "L’email est requis"
        })
      }
    ),
    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.error, children: errors.email.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", children: "Votre expérience" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        id: "message",
        placeholder: "Racontez-nous votre expérience avec Compawny 🤎",
        rows: 5,
        ...register("message", {
          required: "Le témoignage est requis"
        })
      }
    ),
    errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.error, children: errors.message.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Envoi..." : "Envoyer mon témoignage 🫶🏼" }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$1.feedback, children: message })
  ] });
};
const wrapper = "_wrapper_trom1_1";
const backBtnWrapper = "_backBtnWrapper_trom1_6";
const container = "_container_trom1_17";
const grid = "_grid_trom1_23";
const formSection = "_formSection_trom1_33";
const introText = "_introText_trom1_39";
const pageTitle = "_pageTitle_trom1_48";
const pageDescription = "_pageDescription_trom1_56";
const formCard = "_formCard_trom1_64";
const reviewsSection = "_reviewsSection_trom1_80";
const sectionTitle = "_sectionTitle_trom1_89";
const sectionTitleRight = "_sectionTitleRight_trom1_98";
const reviewList = "_reviewList_trom1_107";
const reviewBubble = "_reviewBubble_trom1_119";
const reviewContent = "_reviewContent_trom1_153";
const quote = "_quote_trom1_160";
const author = "_author_trom1_169";
const styles = {
  wrapper,
  backBtnWrapper,
  container,
  grid,
  formSection,
  introText,
  pageTitle,
  pageDescription,
  formCard,
  reviewsSection,
  sectionTitle,
  sectionTitleRight,
  reviewList,
  reviewBubble,
  reviewContent,
  quote,
  author
};
const Reviews = [
  {
    _id: "1",
    name: "Svetlana",
    message: "Grâce à Compawny, j’ai rencontré Nino, un chien senior qui attendait depuis longtemps au refuge. Aujourd’hui, il fait partie de ma famille et je ne remercierai jamais assez ce site de m’avoir permis de le trouver."
  },
  {
    _id: "2",
    name: "Camille",
    message: "Je cherchais une façon concrète de me rendre utile près de chez moi. J’ai découvert une action locale grâce au site, j’y suis allée une première fois… et depuis, j’y retourne presque chaque week-end avec énormément de plaisir."
  },
  {
    _id: "3",
    name: "Sofiane",
    message: "J’ai trouvé une association internationale via Compawny et je suis parti vivre une aventure humaine incroyable. Cette expérience m’a profondément marqué, et j’ai déjà hâte de préparer ma prochaine mission."
  }
];
const ExperienceContact = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: styles.wrapper,
      "aria-labelledby": "experience-contact-title",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.backBtnWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { link: "/", children: "Retour à l'accueil" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.container, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.introText, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "experience-contact-title", className: styles.pageTitle, children: "Partagez votre expérience 💌" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles.pageDescription, children: [
              "Vous avez adopté, participé à une action locale ou vécu une belle aventure au sein d’une association grâce à Compawny ? ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Racontez-nous ce que cette expérience vous a apporté. Vos mots peuvent inspirer d’autres personnes à se lancer à leur tour."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.grid, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: styles.formSection, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.formCard, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.sectionTitle, children: "Racontez-nous votre histoire..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {})
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                className: styles.reviewsSection,
                "aria-labelledby": "reviews-title",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "reviews-title", className: styles.sectionTitleRight, children: "Leurs plus beaux souvenirs 💭" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: styles.reviewList, children: Reviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles.reviewBubble, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: styles.reviewContent, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles.quote, children: [
                      "“ ",
                      review.message,
                      " ”"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: styles.author, children: [
                      "— ",
                      review.name
                    ] })
                  ] }) }, review._id)) })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
};
const export_53136e59d7a2 = {
  default: ExperienceContact
};
export {
  export_53136e59d7a2
};
