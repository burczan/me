<script lang="ts">
  export let title: string;
</script>

<svelte:head>
  <title>Me | {title}</title>
  <meta name="description" content={title} />
</svelte:head>
