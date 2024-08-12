import MarkdownIt from "markdown-it";
import { mdContentPlugin } from "./content";
import { mdContainersPlugin } from "./containers";
import tableWrapper from "./table-wrapper";
import { mdCodeBlockPlugin } from "./code-block";

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContentPlugin);
  md.use(mdContainersPlugin);
  md.use(tableWrapper);
  md.use(mdCodeBlockPlugin)
};

