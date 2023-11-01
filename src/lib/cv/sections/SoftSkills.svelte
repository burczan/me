<script lang="ts">
  const softSkills: SoftSkill[] = [
    "Analytical skills",
    "Attention to detail",
    "Laziness",
    "Mentoring",
    "Open-mindedness",
    "Problem solving",
    "Remote working",
    "Self learning",
  ];
</script>

<figure>
  <figcaption>
    <i class="fa-solid fa-people-pulling" />
    Soft skils
  </figcaption>
  <ul class="hideMarkers">
    {#each softSkills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</figure>
