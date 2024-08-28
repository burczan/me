<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { ProjectLegacy } from "$lib/types";

  export let project: ProjectLegacy;
</script>

<List caption="Status">
  <li>{project.status}</li>
</List>

<p>
  Display pressure values from last 4 hours for Liberec station and warn if
  change can be dangerous.
</p>
<p>
  Data source: <a href="https://www.chmi.cz/" rel="noopener" target="_blank">
    Český hydrometeorologický ústav</a
  >.
</p>

<p>
  <a
    href="https://github.com/burczan/under-pressure"
    rel="noopener"
    target="_blank"
  >
    <button type="button" class="nes-btn">
      <i class="nes-icon github-square is-small" />
    </button>
  </a>
</p>
