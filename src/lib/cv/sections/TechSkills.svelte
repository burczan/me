<script lang="ts">
  import { faIconClass, techSkills } from "$lib/data";
</script>

<figure>
  <figcaption>
    <i class={faIconClass.currentTechstack} />
    Tech skils
  </figcaption>
  <ul class="hideMarkers">
    {#each techSkills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</figure>
