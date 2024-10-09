<script lang="ts">
  export let data;
</script>

<ul>
  {#each data.projects as project}
    <li><a href={project.slug}>{project.title}</a></li>
  {/each}
</ul>
