<script lang="ts">
  interface Props {
    caption?: string | undefined;
    children?: import("svelte").Snippet;
  }

  let { caption = undefined, children }: Props = $props();
</script>

<div>
  {#if caption}
    <span><b>{caption}</b></span>
  {/if}
  <ul>
    {@render children?.()}
  </ul>
</div>
