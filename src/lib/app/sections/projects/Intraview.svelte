<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { Project } from "$lib/types";

  export let project: Project;
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
