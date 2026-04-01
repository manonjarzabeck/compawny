import { r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { C as ContactApiService } from "./contact_api_service-BnD84ebE.js";
import { B as BackBtn } from "./backBtn-BHEboeJj.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "./Btn-DqOqH5nc.js";
const wrapper = "_wrapper_19itk_1";
const header = "_header_19itk_11";
const intro = "_intro_19itk_17";
const title = "_title_19itk_23";
const subtitle = "_subtitle_19itk_30";
const grid = "_grid_19itk_38";
const card = "_card_19itk_44";
const cardHeader = "_cardHeader_19itk_55";
const name = "_name_19itk_63";
const email = "_email_19itk_71";
const content = "_content_19itk_78";
const date = "_date_19itk_86";
const message = "_message_19itk_93";
const styles = {
  wrapper,
  header,
  intro,
  title,
  subtitle,
  grid,
  card,
  cardHeader,
  name,
  email,
  content,
  date,
  message
};
const TestimonialHomepage = () => {
  const [testimonials, setTestimonials] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const fetchTestimonials = async () => {
    try {
      const results = await new ContactApiService().selectAll();
      if (results.data) {
        setTestimonials(results.data);
      }
    } catch (error) {
      console.error(
        "Erreur lors du chargement des retours d'expérience :",
        error
      );
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchTestimonials();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackBtn, { fallbackLink: "/admin", children: "Revenir au tableau de bord" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.header, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.intro, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.title, children: "Retours d’expérience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.subtitle, children: "Consultez ici les témoignages envoyés depuis le formulaire public." })
    ] }) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: "Chargement des témoignages..." }) : testimonials.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.grid, children: testimonials.map((testimonial) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: styles.card, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardHeader, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.name, children: testimonial.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.email, children: testimonial.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles.content, children: [
        "“ ",
        testimonial.message,
        " ”"
      ] }),
      testimonial.date && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles.date, children: [
        "Envoyé le",
        " ",
        new Date(testimonial.date).toLocaleDateString("fr-FR")
      ] })
    ] }, testimonial._id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.message, children: "Aucun retour d’expérience pour le moment." })
  ] });
};
const export_7b42a0b78b5f = {
  default: TestimonialHomepage
};
export {
  export_7b42a0b78b5f
};
