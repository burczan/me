<script lang="ts">
  import { faIconClass, futureTechstack } from "$lib/data";
</script>

<figure>
  <figcaption>
    <i class={faIconClass.futureTechstack} />
    Happy to learn
  </figcaption>
  <ul class="hideMarkers">
    {#each futureTechstack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</figure>
