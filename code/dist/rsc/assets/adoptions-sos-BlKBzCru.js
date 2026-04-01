import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { $ as $$wrap_$$default } from "./intro-pages-B-Q4sbDg.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import { A as AdoptionApiService } from "./adoption_api_service-y3LP6ZbD.js";
import { S as SpeciesApiService } from "./species_api_service-DzyE75Qo.js";
import "node:async_hooks";
import "set-cookie-parser";
import "../__vite_rsc_assets_manifest.js";
import "./Btn-D2406Z0r.js";
const AdoptionsClient = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "f77ed0457451", "default");
const ListeAdoptionsPage = () => {
  const results = react_reactServerExports.use(
    new AdoptionApiService().selectAll()
  );
  const speciesResults = react_reactServerExports.use(
    new SpeciesApiService().selectAll()
  );
  const animals = results.data ?? [];
  const speciesList = speciesResults.data ?? [];
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Adoptions d'animaux SOS",
        description: "Tous les animaux SOS à l'adoption",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      $$wrap_$$default,
      {
        image: "/img/pages/Adoption.png",
        alt: "Dessin bénévoles animaliers de la section Adoption SOS",
        title: "Parce qu’ils méritent aussi leur bonheur 🫶🏼",
        description: "Derrière chaque regard se cache une histoire singulière. Seniors,\n					malades ou considérés comme plus difficiles à adopter, ces animaux\n					n’attendent qu’une famille prête à leur offrir stabilité et douceur.\n					Découvre ces profils attachants et laisse parler ton cœur."
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(AdoptionsClient, { adoptions: animals, speciesList })
  ] });
};
export {
  ListeAdoptionsPage as default
};
