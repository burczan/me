<script lang="ts">
  import { onMount } from "svelte";
  import { PenTool } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import { generateToC } from "$lib/utils/generateToC";

  export let data;

  const pdfFiles = import.meta.glob("$lib/documents/*.pdf", {
    eager: true,
    import: "default",
  });

  const pdfMap: Record<string, string> = Object.fromEntries(
    Object.entries(pdfFiles).map(([path, url]) => {
      const filename = path.replace("/src/lib/documents/", "");
      return [filename, url as string];
    }),
  );

  const articles = data.articles.map((article) => {
    return {
      ...article,
      href: pdfMap[article.pdfFileName],
    };
  });

  onMount(() => {
    generateToC(2);

    const { hash } = document.location;
    const scrollTo = hash && document.getElementById(hash.slice(1));
    if (scrollTo) {
      scrollTo.scrollIntoView();
    }
  });
</script>

<SvelteHead title="Writing" />

<div id="writing">
  <h1><PenTool class="icon-h1" /> Writing</h1>

  <div class="box">
    <article class="default">
      {#each articles as article}
        <section>
          <h2 class="text-center">{article.title}</h2>

          <p class="text-center">
            <a href={article.href} rel="noopener" target="_blank">PDF</a>
          </p>

          {#if article.comment}
            <p class="comment">{article.comment}</p>
          {/if}

          <h3 class="text-center">Abstract</h3>
          <p class="abstract">{article.abstract}</p>
        </section>
      {/each}
    </article>
  </div>
</div>

<style>
  .comment {
    max-width: 80%;
    text-align: justify;
    font-size: smaller;
    font-style: italic;
    margin-left: auto;
    margin-right: auto;
  }

  .abstract {
    max-width: 80%;
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
  }
</style>
