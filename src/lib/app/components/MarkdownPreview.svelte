<script lang="ts">
  import MarkdownIt from "markdown-it";
  import DOMPurify from "isomorphic-dompurify";

  export let content: string;

  const md = new MarkdownIt({
    linkify: true,
    typographer: true,
  });

  // md.renderer.rules.strong_open = () => "<b>";
  // md.renderer.rules.strong_close = () => "</b>";
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const srcIndex = token.attrIndex("src");

    if (!token.attrs) {
      return self.renderToken(tokens, idx, options);
    }

    const src = token.attrs[srcIndex][1];
    const isPathRelative = !src.startsWith("http") && !src.startsWith("/");
    if (isPathRelative) {
      token.attrs[srcIndex][1] = `/src/${src}`;
    }

    return self.renderToken(tokens, idx, options);
  };

  const dirtyHtml = md.render(content);
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);
</script>

{@html cleanHtml}
