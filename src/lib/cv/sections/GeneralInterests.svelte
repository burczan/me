<script lang="ts">
  import { faIconClass, generalInterests } from "$lib/data";
</script>

<section id="general-interests">
  <h2>
    <i class={faIconClass.generalInterests} /> Interests
  </h2>

  <ul class="hideMarkers">
    {#each generalInterests as entry}
      <li>{entry}</li>
    {/each}
  </ul>
</section>
