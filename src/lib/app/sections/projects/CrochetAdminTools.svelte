<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { ProjectLegacy } from "$lib/types";

  export let project: ProjectLegacy;
</script>

<List caption="Status">
  <li>{project.status}</li>
</List>

<List>
  <li>Database of crochet patterns.</li>
  <li>Database of yarns.</li>
  <li>Various tools and calculators for patterns/projects/yarns management.</li>
</List>

<p>
  <button type="button" class="nes-btn is-disabled">
    <i class="nes-icon github-square is-small" />
    Private repository
  </button>
</p>
