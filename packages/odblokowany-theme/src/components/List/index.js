import { loadable } from "frontity";
// Configurable list of articles
export default loadable(() => import("./List"));
