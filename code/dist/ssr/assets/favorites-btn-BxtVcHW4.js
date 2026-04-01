import { j as jsxRuntimeExports } from "../index.js";
class UserActionApiService {
  prefix = "/api/user-action";
  selectByUser = async (userId, token) => {
    const request = new Request(
      `${void 0}${this.prefix}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  insert = async (data, token) => {
    const request = new Request(
      `${void 0}${this.prefix}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  delete = async (data, token) => {
    const request = new Request(
      `${void 0}${this.prefix}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
}
const favoriteBtn = "_favoriteBtn_h8vuq_1";
const styles = {
  favoriteBtn
};
const FavoritesBtn = ({ isFavorite, onToggle }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: styles.favoriteBtn,
      onClick: onToggle,
      "aria-label": isFavorite ? "Retirer des favoris" : "Ajouter aux favoris",
      title: isFavorite ? "Retirer des favoris" : "Ajouter aux favoris",
      children: isFavorite ? "🤎" : "♡"
    }
  );
};
export {
  FavoritesBtn as F,
  UserActionApiService as U
};
