import { r as registerClientReference } from "../index.js";
import "node:async_hooks";
import "set-cookie-parser";
const _delete = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "ed29a01200a6", "default");
export {
  _delete as default
};
