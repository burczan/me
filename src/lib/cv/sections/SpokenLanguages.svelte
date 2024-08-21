<script lang="ts">
  import { faIconClass, spokenLanguages } from "$lib/data";
</script>

<figure id="spoken-languages">
  <figcaption>
    <i class={faIconClass.spokenLanguages} />
    Languages
  </figcaption>

  <ul class="hideMarkers">
    {#each spokenLanguages as { language, level }}
      <li>
        <strong>{language}</strong>
        <br />
        ({level})
      </li>
    {/each}
  </ul>
</figure>
