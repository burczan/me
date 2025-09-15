<script lang="ts">
  import { faIconClass, spokenLanguages } from "$lib/data";
</script>

<section id="spoken-languages">
  <h2>
    <i class={faIconClass.spokenLanguages}></i> Languages
  </h2>

  <ul class="hideMarkers">
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each spokenLanguages as { language, level }}
      <li>
        <strong>{language}</strong>
        <br />
        ({level})
      </li>
    {/each}
  </ul>
</section>
