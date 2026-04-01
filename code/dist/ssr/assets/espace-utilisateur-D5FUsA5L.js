import { r as reactExports, j as jsxRuntimeExports, N as NavLink } from "../index.js";
import { S as SecurityService } from "./security_service-iZlIquiH.js";
import { F as FavoritesBtn, U as UserActionApiService } from "./favorites-btn-BxtVcHW4.js";
import { B as Btn } from "./Btn-DqOqH5nc.js";
import "../__vite_rsc_assets_manifest.js";
import "node:async_hooks";
import "jose";
const backBtnWrapper = "_backBtnWrapper_7jz3m_1";
const wrapper = "_wrapper_7jz3m_12";
const card = "_card_7jz3m_20";
const cardHeader = "_cardHeader_7jz3m_27";
const welcome = "_welcome_7jz3m_37";
const cardTitle = "_cardTitle_7jz3m_45";
const cardSubtitle = "_cardSubtitle_7jz3m_53";
const logoutWrapper = "_logoutWrapper_7jz3m_61";
const logoutBtn = "_logoutBtn_7jz3m_67";
const favoriteTitleRow = "_favoriteTitleRow_7jz3m_91";
const favoritesSection = "_favoritesSection_7jz3m_98";
const emptyState = "_emptyState_7jz3m_104";
const loading = "_loading_7jz3m_116";
const favoritesGrid = "_favoritesGrid_7jz3m_125";
const favoriteCard = "_favoriteCard_7jz3m_131";
const favoriteCardInner = "_favoriteCardInner_7jz3m_141";
const favoriteImageWrapper = "_favoriteImageWrapper_7jz3m_153";
const favoriteImage = "_favoriteImage_7jz3m_153";
const favoriteTitle = "_favoriteTitle_7jz3m_91";
const favoriteDescription = "_favoriteDescription_7jz3m_184";
const favoriteActions = "_favoriteActions_7jz3m_194";
const secondaryBtn = "_secondaryBtn_7jz3m_205";
const styles = {
  backBtnWrapper,
  wrapper,
  card,
  cardHeader,
  welcome,
  cardTitle,
  cardSubtitle,
  logoutWrapper,
  logoutBtn,
  favoriteTitleRow,
  favoritesSection,
  emptyState,
  loading,
  favoritesGrid,
  favoriteCard,
  favoriteCardInner,
  favoriteImageWrapper,
  favoriteImage,
  favoriteTitle,
  favoriteDescription,
  favoriteActions,
  secondaryBtn
};
const UserEspace = () => {
  const user = new SecurityService().getUser();
  const token = new SecurityService().getToken();
  const [favorites, setFavorites] = reactExports.useState([]);
  const [loading2, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchFavorites = async () => {
      if (!user || !token) {
        setLoading(false);
        return;
      }
      try {
        const results = await new UserActionApiService().selectByUser(user.id, token);
        if (results.data) {
          setFavorites(results.data);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des favoris :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [user, token]);
  const handleRemoveFavorite = async (actionId) => {
    if (!user || !token) return;
    try {
      await new UserActionApiService().delete(
        {
          user_id: user.id,
          action_id: actionId
        },
        token
      );
      setFavorites((prev) => prev.filter((item) => item.id !== actionId));
    } catch (error) {
      console.error("Erreur lors de la suppression du favori :", error);
    }
  };
  if (!user || !token || loading2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.loading, children: "Chargement..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles.wrapper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.backBtnWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { link: "/", children: "Revenir à l'accueil" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.card, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardHeader, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles.welcome, children: [
        "Bonjour ",
        user.email,
        " 👋"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles.cardTitle, children: "Mes favoris 🤎" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.cardSubtitle, children: "Retrouve ici les actions que tu as sauvegardées pour les consulter plus facilement." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.favoritesSection, children: favorites.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.favoritesGrid, children: favorites.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: styles.favoriteCard, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.favoriteCardInner, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.favoriteImageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `/img/action/${item.image}`,
          alt: item.name,
          className: styles.favoriteImage
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.favoriteTitleRow, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: styles.favoriteTitle, children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FavoritesBtn,
          {
            isFavorite: true,
            onToggle: () => handleRemoveFavorite(item.id)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.favoriteDescription, children: item.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.favoriteActions, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavLink,
        {
          to: `/actions/${item.id}`,
          className: styles.secondaryBtn,
          children: "Voir la fiche 🐾"
        }
      ) })
    ] }) }, item.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.emptyState, children: "Tu n’as pas encore ajouté d’action en favoris pour le moment." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.logoutWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/logout", className: styles.logoutBtn, children: "Déconnexion" }) })
  ] });
};
const export_89b65f040d79 = {
  default: UserEspace
};
export {
  export_89b65f040d79
};
