<script lang="ts">
  import { currentTechstack, faIconClass } from "$lib/data";
</script>

<figure>
  <figcaption>
    <i class={faIconClass.currentTechstack} />
    Current techstack
  </figcaption>
  <ul class="hideMarkers">
    {#each currentTechstack as { tech, favourite }}
      <li>
        {tech}
        {#if favourite}
          <i class="{faIconClass.favourite} fa-xs" />
        {/if}
      </li>
    {/each}
  </ul>
</figure>
