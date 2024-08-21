<script lang="ts">
  import { faIconClass, softSkills } from "$lib/data";
</script>

<figure id="soft-skills">
  <figcaption>
    <i class={faIconClass.softSkills} />
    Soft skils
  </figcaption>

  <ul class="hideMarkers">
    {#each softSkills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</figure>
