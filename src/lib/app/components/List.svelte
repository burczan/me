<script lang="ts">
  export let caption: string | undefined = undefined;
  export let hideListStyleType = false;
</script>

<div class="lists">
  <figure>
    {#if caption}
      <figcaption class="nes-text is-primary">{caption}</figcaption>
    {/if}
    <ul class="nes-list is-circle" class:is-circle={!hideListStyleType}>
      <slot />
    </ul>
  </figure>
</div>

<style>
  .nes-list.is-circle :global(li::before) {
    color: rgb(255, 255, 255);
  }
</style>
