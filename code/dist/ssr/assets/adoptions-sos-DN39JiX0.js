import { j as jsxRuntimeExports, r as reactExports } from "../index.js";
import { s as styles } from "./filtered.module-bE1eQQpj.js";
import { B as Btn } from "./Btn-DqOqH5nc.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
const card = "_card_pex9r_1";
const cardInner = "_cardInner_pex9r_11";
const imageWrapper = "_imageWrapper_pex9r_25";
const title = "_title_pex9r_45";
const name = "_name_pex9r_54";
const departement = "_departement_pex9r_64";
const style$1 = {
  card,
  cardInner,
  imageWrapper,
  title,
  name,
  departement
};
const AdoptionListItem = ({ data }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: style$1.card, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style$1.cardInner, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: style$1.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/img/adoption/${data.image}`, alt: data.name }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: style$1.title, children: [
      "🤎 ",
      data.name,
      " 🤎"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: style$1.name, children: data.association.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: style$1.departement, children: [
      "📍 ",
      data.association.department.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { link: `/adoptions/${data.id}`, children: "Je veux l'adopter 🤎" })
  ] }) });
};
const grid = "_grid_4wkd0_1";
const style = {
  grid
};
const AdoptionList = ({ adoptions }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: style.grid, children: adoptions.map((animal) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdoptionListItem, { data: animal }, animal.id)) });
};
const FilterAdoptions = ({
  selectedSpecies,
  setSelectedSpecies,
  speciesList
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.filter, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "select",
    {
      className: styles.select,
      value: selectedSpecies,
      onChange: (e) => setSelectedSpecies(e.target.value),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Toutes les espèces" }),
        speciesList.map((species) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: species.id, children: species.name }, species.id))
      ]
    }
  ) });
};
const AdoptionsClient = ({ adoptions, speciesList }) => {
  const [selectedSpecies, setSelectedSpecies] = reactExports.useState("");
  const filteredAnimals = reactExports.useMemo(() => {
    if (!selectedSpecies) return adoptions;
    return adoptions.filter(
      (animal) => animal.species_id === Number(selectedSpecies)
    );
  }, [selectedSpecies, adoptions]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterAdoptions,
      {
        adoptions,
        speciesList,
        selectedSpecies,
        setSelectedSpecies
      }
    ),
    filteredAnimals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.nothingToSee, children: "Aucun animal disponible pour cette espèce." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AdoptionList, { adoptions: filteredAnimals, speciesList })
  ] });
};
const export_f77ed0457451 = {
  default: AdoptionsClient
};
export {
  export_f77ed0457451
};
