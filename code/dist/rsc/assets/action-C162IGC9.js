import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import { r as registerClientReference, a as react_reactServerExports } from "../index.js";
import { $ as $$wrap_$$default } from "./intro-pages-B-Q4sbDg.js";
import { S as Seo } from "./seo-D_8Qmlea.js";
import { A as ActionApiService } from "./action_api_service-Bki42WyI.js";
import { D as DepartmentApiService } from "./department_api_service-LswQr1u6.js";
import "node:async_hooks";
import "set-cookie-parser";
import "../__vite_rsc_assets_manifest.js";
import "./Btn-D2406Z0r.js";
const ActionsClient = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "d709ecfcc313", "default");
const ListeActionsPage = () => {
  const results = react_reactServerExports.use(
    new ActionApiService().selectAll()
  );
  const departmentResults = react_reactServerExports.use(
    new DepartmentApiService().selectAll()
  );
  const actions = results.data ?? [];
  const departments = departmentResults.data ?? [];
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      Seo,
      {
        title: "Actions bénévoles",
        description: "Les actions de bénévolat autour de chez vous",
        url: ""
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      $$wrap_$$default,
      {
        image: "/img/pages/Action.png",
        alt: "Dessin bénévoles animaliers de la section Actions Locales",
        title: "Parce que chaque action compte 🫶🏼",
        description: "Changer les choses, ça commence souvent localement. Un geste, un\n					engagement, quelques heures de ton temps peuvent faire une vraie\n					différence pour les animaux et les associations qui les protègent. Tu\n					peux parcourir les actions proposées et rejoindre celles qui résonnent\n					avec tes valeurs."
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(ActionsClient, { actions, departments })
  ] });
};
export {
  ListeActionsPage as default
};
