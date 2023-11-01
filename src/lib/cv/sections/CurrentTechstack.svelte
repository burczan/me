<script lang="ts">
  const currentTechstack: CurrentTechstack = [
    {
      tech: "AWS",
      favourite: false,
    },
    {
      tech: "Bash",
      favourite: false,
    },
    {
      tech: "JavaScript",
      favourite: false,
    },
    {
      tech: "Linux",
      favourite: true,
    },
    {
      tech: "Node.js",
      favourite: true,
    },
    {
      tech: "React",
      favourite: false,
    },
    {
      tech: "Svelte",
      favourite: true,
    },
    {
      tech: "TypeScript",
      favourite: true,
    },
  ];
</script>

<figure>
  <figcaption>
    <i class="fa-solid fa-gears" />
    Current techstack
  </figcaption>
  <ul class="hideMarkers">
    {#each currentTechstack as { tech, favourite }}
      <li>
        {tech}
        {#if favourite}
          <i class="fa-solid fa-heart fa-xs" />
        {/if}
      </li>
    {/each}
  </ul>
</figure>
