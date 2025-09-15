<script lang="ts">
  import { faIconClass, softSkills } from "$lib/data";
</script>

<section id="soft-skills">
  <h2>
    <i class={faIconClass.softSkills}></i> Soft skils
  </h2>

  <ul class="hideMarkers">
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each softSkills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
