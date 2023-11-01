<script lang="ts">
  import { faIconClass, spokenLanguages } from "$lib/data";
</script>

<figure>
  <figcaption>
    <i class={faIconClass.spokenLanguages} />
    Spoken languages
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
