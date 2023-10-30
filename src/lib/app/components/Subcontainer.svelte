<script lang="ts">
  export let h2: string | undefined = undefined;
</script>

<div class="nes-container is-rounded is-dark">
  {#if h2}
    <h2 class="nes-text is-primary">{h2}</h2>
  {/if}

  <slot />
</div>

<style>
  .nes-container {
    margin-bottom: 1em;
  }
</style>
