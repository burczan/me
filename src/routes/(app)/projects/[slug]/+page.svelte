<script lang="ts">
  export let data;
</script>

<svelte:component this={data.project.component} project={data.project} />
