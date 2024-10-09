<script lang="ts">
  import MarkdownPreview from "$lib/app/components/MarkdownPreview.svelte";
  import crochetManagementSystem from "$lib/documents/crochetMS.md?raw";
</script>

<article class="system-design">
  <MarkdownPreview content={crochetManagementSystem} />
</article>
