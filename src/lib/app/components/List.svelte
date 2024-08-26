<script lang="ts">
  export let caption: string | undefined = undefined;
</script>

<div>
  {#if caption}
    <span><b>{caption}</b></span>
  {/if}
  <ul>
    <slot />
  </ul>
</div>
