import { r as registerClientReference } from "../index.js";
import "node:async_hooks";
import "set-cookie-parser";
const _delete = /* @__PURE__ */ registerClientReference(() => {
  throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "1f41c3927cbf", "default");
export {
  _delete as default
};
