<script lang="ts">
  import { faIconClass, generalInterests } from "$lib/data";
</script>

<figure id="general-interests">
  <figcaption>
    <i class={faIconClass.generalInterests} />
    Interests
  </figcaption>

  <ul class="hideMarkers">
    {#each generalInterests as entry}
      <li>{entry}</li>
    {/each}
  </ul>
</figure>
