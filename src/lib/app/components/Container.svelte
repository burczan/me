<script lang="ts">
  export let title: string | undefined = undefined;
</script>

<div class="nes-container is-dark" class:with-title={!!title}>
  {#if title}
    <h1 class="title">{title}</h1>
  {/if}

  <slot />
</div>
