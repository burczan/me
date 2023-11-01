<script lang="ts">
  import { faIconClass, generallyInterested } from "$lib/data";
</script>

<figure>
  <figcaption>
    <i class={faIconClass.generallyInterested} />
    Generally interested in
  </figcaption>
  <ul class="hideMarkers">
    {#each generallyInterested as entry}
      <li>{entry}</li>
    {/each}
  </ul>
</figure>
