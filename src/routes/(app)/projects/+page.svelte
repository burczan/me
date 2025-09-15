<script lang="ts">
  let { data } = $props();
</script>

<ul>
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each data.projects as project}
    <li><a href={project.slug}>{project.title}</a></li>
  {/each}
</ul>
