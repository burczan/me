<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { Project } from "$lib/types";

  export let project: Project;
</script>

<List caption="Status" showMarkers={false}>
  <li>{project.status}</li>
</List>

<p>
  Easy management of <a
    href="https://plantuml.com/"
    rel="noopener"
    target="_blank"
  >
    PlantUML
  </a> diagrams.
</p>

<p>
  <a
    href="https://github.com/burczan/plantuml-is-your-friend"
    rel="noopener"
    target="_blank"
  >
    <button type="button" class="nes-btn">
      <i class="nes-icon github-square is-small" />
    </button>
  </a>
</p>
