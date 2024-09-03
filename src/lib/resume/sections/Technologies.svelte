<script lang="ts">
  import { faIconClass, technologies } from "$lib/data";
</script>

<section id="technologies">
  <h2>
    <i class={faIconClass.technologies} /> Tech stack
  </h2>

  <ul class="hideMarkers">
    {#each technologies as technology}
      <li>{technology}</li>
    {/each}
  </ul>
</section>
