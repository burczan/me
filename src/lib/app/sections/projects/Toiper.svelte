<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { Project } from "$lib/types";

  export let project: Project;
</script>

<List caption="Status" showMarkers={false}>
  <li>{project.status}</li>
</List>

<p>
  Compare price of two toilet paper rolls depending on amount of layers and
  leafs.
</p>

<p>
  <a href="https://github.com/burczan/toiper" rel="noopener" target="_blank">
    <button type="button" class="nes-btn">
      <i class="nes-icon github-square is-small" />
      Python CLI version
    </button>
  </a>
  <a
    href="https://github.com/burczan/toiper-react"
    rel="noopener"
    target="_blank"
  >
    <button type="button" class="nes-btn">
      <i class="nes-icon github-square is-small" />
      React GUI version
    </button>
  </a>
</p>
