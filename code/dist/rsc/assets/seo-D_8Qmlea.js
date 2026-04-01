import { j as jsxRuntime_reactServerExports } from "./jsx-runtime.react-server-CwbeX0ZD.js";
import "../index.js";
const Seo = ({ title, description, url }) => {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("title", { children: `Compawny - ${title}` }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { name: "description", content: ` Compawny - ${description}` }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { property: "og:title", content: `Compawny - ${title}` }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { property: "og:url", content: `https://compawny.com${url} ` }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      "meta",
      {
        property: "og:image",
        content: "https://compawny.com/img/og_banner.png"
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { property: "og:description", content: ` Compawny - ${description}` }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { name: "twitter:card", content: "summary" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { name: "twitter:title", content: "" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      "meta",
      {
        name: "twitter:description",
        content: "A compelling description that makes people want to click."
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { name: "twitter:image", content: "https://yoursite.com/image.jpg" })
  ] });
};
export {
  Seo as S
};
