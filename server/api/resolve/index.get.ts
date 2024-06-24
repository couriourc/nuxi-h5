import {globSync} from "glob";
import path from "path";

export default defineEventHandler((event) => {
    return globSync(path.resolve(
        import.meta.dirname,
        "../../content/*.md"));
});
