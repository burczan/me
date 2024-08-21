<script lang="ts">
  import { faIconClass, technologies } from "$lib/data";
</script>

<figure id="technologies">
  <figcaption>
    <i class={faIconClass.technologies} />
    Technologies
  </figcaption>

  <ul class="hideMarkers">
    {#each technologies as technology}
      <li>{technology}</li>
    {/each}
  </ul>
</figure>
