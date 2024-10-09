<script lang="ts">
  import MarkdownIt from "markdown-it";
  import DOMPurify from "isomorphic-dompurify";

  export let content: string;

  const images = import.meta.glob("$lib/assets/**/*.{png,jpg,jpeg,gif,svg}", {
    eager: true,
    import: "default",
  });

  const imageMap: Record<string, string> = Object.fromEntries(
    Object.entries(images).map(([path, url]) => {
      // Extract relative path from the full path (e.g., "subdir/img1.png")
      const relativePath = path.replace("/src/lib/assets/", "");
      return [relativePath, url as string];
    }),
  );

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

    if (imageMap[src]) {
      token.attrs[srcIndex][1] = imageMap[src];
    } else {
      throw new Error(`Invalid image path for ${src}`);
    }

    return self.renderToken(tokens, idx, options);
  };

  const dirtyHtml = md.render(content);
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);
</script>

{@html cleanHtml}
