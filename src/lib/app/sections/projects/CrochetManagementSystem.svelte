<script lang="ts">
  import MarkdownPreview from "$lib/app/components/MarkdownPreview.svelte";
  import crochetManagementSystem from "$lib/documents/crochetMS.md?raw";
</script>

<article class="default">
  <MarkdownPreview content={crochetManagementSystem} />
</article>
