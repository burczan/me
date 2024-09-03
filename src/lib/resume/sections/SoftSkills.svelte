<script lang="ts">
  import { faIconClass, softSkills } from "$lib/data";
</script>

<section id="soft-skills">
  <h2>
    <i class={faIconClass.softSkills} /> Soft skils
  </h2>

  <ul class="hideMarkers">
    {#each softSkills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
