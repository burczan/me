<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { ProjectLegacy } from "$lib/types";

  export let project: ProjectLegacy;
</script>

<List caption="Status">
  <li>{project.status}</li>
</List>

<p>Prepare for behavioral interviews like a pro.</p>

<p>
  <button type="button" class="nes-btn is-disabled">
    <i class="nes-icon github-square is-small" />
    Public soon
  </button>
</p>
