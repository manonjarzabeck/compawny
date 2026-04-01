import { j as jsxRuntimeExports, r as reactExports } from "../index.js";
import { s as styles } from "./filtered.module-bE1eQQpj.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { F as FavoritesBtn, U as UserActionApiService } from "./favorites-btn-BxtVcHW4.js";
import { B as Btn } from "./Btn-DqOqH5nc.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const card = "_card_vthry_1";
const cardInner = "_cardInner_vthry_11";
const imageWrapper = "_imageWrapper_vthry_24";
const titleRow = "_titleRow_vthry_46";
const title = "_title_vthry_46";
const description = "_description_vthry_65";
const departement = "_departement_vthry_75";
const style$1 = {
  card,
  cardInner,
  imageWrapper,
  titleRow,
  title,
  description,
  departement
};
const ActionListItem = ({
  data,
  favoriteIds,
  setFavoriteIds
}) => {
  const user = new SecurityService().getUser();
  const token = new SecurityService().getToken();
  const isFavorite = favoriteIds.includes(data.id);
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
        setFavoriteIds((prev) => prev.filter((id) => id !== data.id));
      } else {
        await new UserActionApiService().insert(
          {
            user_id: user.id,
            action_id: data.id
          },
          token
        );
        setFavoriteIds((prev) => [...prev, data.id]);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du favori :", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: style$1.card, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style$1.cardInner, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: style$1.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/img/action/${data.image}`, alt: data.name }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: style$1.titleRow, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: style$1.title, children: data.name }),
      user && token && /* @__PURE__ */ jsxRuntimeExports.jsx(
        FavoritesBtn,
        {
          isFavorite,
          onToggle: handleToggleFavorite
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: style$1.description, children: data.association.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: style$1.departement, children: [
      "📍 ",
      data.association.department.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { link: `/actions/${data.id}`, children: "En savoir plus 🐾" })
  ] }) });
};
const grid = "_grid_11sbk_1";
const style = {
  grid
};
const ActionList = ({ actions }) => {
  const user = new SecurityService().getUser();
  const token = new SecurityService().getToken();
  const [favoriteIds, setFavoriteIds] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const fetchFavorites = async () => {
      if (!user || !token) return;
      try {
        const results = await new UserActionApiService().selectByUser(user.id, token);
        if (results.data) {
          setFavoriteIds(results.data.map((item) => item.id));
        }
      } catch (error) {
        console.error("Erreur lors du chargement des favoris :", error);
      }
    };
    fetchFavorites();
  }, [user, token]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: style.grid, children: actions.filter((item) => item.is_active).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ActionListItem,
    {
      data: item,
      favoriteIds,
      setFavoriteIds
    },
    item.id
  )) });
};
const FilterActions = ({
  departments,
  selectedDepartment,
  onChange
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.filter, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "select",
    {
      className: styles.select,
      value: selectedDepartment,
      onChange: (e) => onChange(e.target.value),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Tous les départements" }),
        departments.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: dept.id, children: dept.name }, dept.id))
      ]
    }
  ) });
};
const PageActions = ({ actions, departments }) => {
  const [selectedDepartment, setSelectedDepartment] = reactExports.useState("");
  const filteredActions = reactExports.useMemo(() => {
    if (!selectedDepartment) return actions;
    return actions.filter(
      (action) => action.association.department_id === Number(selectedDepartment)
    );
  }, [selectedDepartment, actions]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterActions,
      {
        actions,
        departments,
        selectedDepartment,
        onChange: setSelectedDepartment
      }
    ),
    filteredActions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.nothingToSee, children: "Aucune action disponible pour ce département." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionList,
      {
        actions: filteredActions,
        departments,
        selectedDepartment,
        onChange: setSelectedDepartment
      }
    )
  ] });
};
const export_d709ecfcc313 = {
  default: PageActions
};
export {
  export_d709ecfcc313
};
