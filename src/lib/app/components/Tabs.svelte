<script lang="ts">
  import type { ComponentType, SvelteComponent } from "svelte";

  interface Tab {
    name: string;
    content: ComponentType<SvelteComponent>;
  }

  export let tabs: Tab[] = [];

  let activeTab = 0;

  function selectTab(index: number) {
    activeTab = index;
  }
</script>

<div class="tabs">
  <div class="tab-headers">
    {#each tabs as tab, index}
      <button
        class="tab-header"
        class:primary={index === activeTab}
        class:outline={index === activeTab}
        on:click={() => selectTab(index)}
      >
        {tab.name}
      </button>
    {/each}
  </div>

  <div class="tab-content">
    {#if tabs[activeTab]}
      <svelte:component this={tabs[activeTab].content} />
    {/if}
  </div>
</div>

<style>
  .tab-headers {
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .tab-header {
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid transparent;
    border-bottom: none;
  }

  .tab-content {
    padding: 20px;
  }
</style>
