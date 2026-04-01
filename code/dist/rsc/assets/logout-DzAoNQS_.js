import { r as registerClientReference } from "../index.js";
import "node:async_hooks";
import "set-cookie-parser";
const logout = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "9f58dc29c4c4", "default");
export {
  logout as default
};
