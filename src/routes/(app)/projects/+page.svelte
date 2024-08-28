<script lang="ts">
  export let data;
</script>

{#each data.projects as project}
  <li><a href={project.slug}>{project.title}</a></li>
{/each}
