import { Fragment, useMemo } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeReact from "rehype-react";
import { jsx, jsxs } from "react/jsx-runtime";

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "section", "div", "span"],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "className"],
  },
};

type HtmlBlockProps = {
  html: string;
};

export function HtmlBlock({ html }: HtmlBlockProps) {
  return useMemo(() => {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeSanitize, schema)
      .use(rehypeReact, {
        Fragment,
        jsx,
        jsxs,
      })
      .processSync(html).result;
  }, [html]);
}
