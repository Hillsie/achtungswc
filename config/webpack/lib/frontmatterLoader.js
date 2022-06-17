"use strict";
const matter = require("gray-matter");
const stringifyObject = require("stringify-object");
const remark = require("remark-frontmatter"); // YAML and such.
import remarkGfm from "remark-gfm";

module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = matter(src);
  const compiledGfm = await compile(
    remarkGfm(content, { singleTilde: true }),
  );
  
  const newContent = await compile(remark(compiledGfm));
  // Two plugins, first w/ options.
  //   const code = `export const frontMatter = ${stringifyObject(data)}
  // ${content}`;
  const code = `export const frontMatter = ${stringifyObject(data)} ${newContent}`;
  return callback(null, code);
};;
// Investigate
// programatically checkiif  a package is loaded
// https://stackoverflow.com/questions/60454251/how-to-know-the-version-of-currently-installed-package-from-yarn-lock
// yarn list --pattern lodash --depth=0 --json --non-interactive --no-progress | jq -r '.data.trees[].name'
