<script lang="ts">
  import { ArrowBigUp } from "lucide-svelte";

  export let showAtPixel = 2000;

  let scrollHeight = 0;

  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  $: showGotoTop = scrollHeight > showAtPixel;
</script>

{#if showGotoTop}
  <button on:click={gotoTop} class="secondary go-to-top" title="Go to top">
    <ArrowBigUp />
  </button>
{/if}

<svelte:window bind:scrollY={scrollHeight} />

<style>
  button {
    padding: 0.5rem;
  }

  .go-to-top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;
    transition-duration: 300ms;
    z-index: 999;
  }

  .go-to-top:hover {
    transform: translateY(-10px);
  }
</style>
