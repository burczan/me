<script lang="ts">
  import { faIconClass, generalInterests } from "$lib/data";
</script>

<figure>
  <figcaption>
    <i class={faIconClass.generalInterests} />
    General Interests
  </figcaption>
  <ul class="hideMarkers">
    {#each generalInterests as entry}
      <li>{entry}</li>
    {/each}
  </ul>
</figure>
