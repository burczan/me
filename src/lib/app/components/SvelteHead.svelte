<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();
</script>

<svelte:head>
  <title>Me | {title}</title>
  <meta name="description" content={title} />
</svelte:head>
