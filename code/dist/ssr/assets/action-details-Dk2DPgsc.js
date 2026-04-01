import { r as reactExports, j as jsxRuntimeExports } from "../index.js";
import { f as formatDateFR, A as AssociationDetailsContent } from "./association_details_content-11XM0YHH.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { F as FavoritesBtn, U as UserActionApiService } from "./favorites-btn-BxtVcHW4.js";
import { B as BackBtn } from "./backBtn-BHEboeJj.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "./maplibre-DGjkt47v.js";
import "maplibre-gl";
import "jose";
import "./Btn-DqOqH5nc.js";
const container = "_container_1udfh_1";
const grid = "_grid_1udfh_7";
const card = "_card_1udfh_14";
const cardInner = "_cardInner_1udfh_24";
const cardPrimary = "_cardPrimary_1udfh_30";
const imageWrapper = "_imageWrapper_1udfh_35";
const titleRow = "_titleRow_1udfh_48";
const title = "_title_1udfh_48";
const description = "_description_1udfh_62";
const date = "_date_1udfh_69";
const associationWrapper = "_associationWrapper_1udfh_74";
const style = {
  container,
  grid,
  card,
  cardInner,
  cardPrimary,
  imageWrapper,
  titleRow,
  title,
  description,
  date,
  associationWrapper
};
const ActionDetailsContent = ({ data }) => {
  const user = new SecurityService().getUser();
  const token = new SecurityService().getToken();
  const [isFavorite, setIsFavorite] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchFavorites = async () => {
      if (!user || !token) return;
      try {
        const results = await new UserActionApiService().selectByUser(
          user.id,
          token
        );
        const favoriteIds = results.data?.map((item) => item.id) ?? [];
        setIsFavorite(favoriteIds.includes(data.id));
      } catch (error) {
        console.error("Erreur lors du chargement des favoris :", error);
      }
    };
    fetchFavorites();
  }, [data.id, user, token]);
  const handleToggleFavorite = async () => {
    if (!user || !token) return;
    try {
      if (isFavorite) {
        await new UserActionApiService().delete(
          {
            user_id: user.id,
            action_id: data.id
          },
          token
        );
        setIsFavorite(false);
      } else {
        await new UserActionApiService().insert(
          {
            user_id: user.id,
            action_id: data.id
          },
          token
        );
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du favori :", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackBtn, { fallbackLink: "/actions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: style.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style.grid, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${style.card} ${style.cardPrimary}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style.cardInner, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: style.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/img/action/${data.image}`, alt: data.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style.titleRow, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: style.title, children: data.name }),
          user && token && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FavoritesBtn,
            {
              isFavorite,
              onToggle: handleToggleFavorite
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: style.description, children: data.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: style.date, children: [
          "Cette initiative est proposée par l'association",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: data.association.name }),
          " et à été publié le",
          " ",
          formatDateFR(data.published),
          " 🐾"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: style.associationWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AssociationDetailsContent,
        {
          data: data.association,
          zoom: 10,
          mapStyle: "https://tiles.openfreemap.org/styles/bright"
        }
      ) })
    ] }) })
  ] });
};
const export_c71db0f9472e = {
  default: ActionDetailsContent
};
export {
  export_c71db0f9472e
};
