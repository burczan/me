<script lang="ts">
  import MarkdownPreview from "$lib/app/components/MarkdownPreview.svelte";
  import crochetManagementSystem from "$lib/documents/crochetMS.md?raw";
  import type { ProjectData } from "$lib/types";

  interface Props {
    project: ProjectData;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { project }: Props = $props();
</script>

<article class="default">
  <MarkdownPreview content={crochetManagementSystem} />
</article>
