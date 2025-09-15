<script lang="ts">
  import type { Component } from "svelte";

  interface Tab {
    name: string;
    content: Component;
  }

  interface Props {
    tabs?: Tab[];
  }

  let { tabs = [] }: Props = $props();

  let activeTab = $state(0);

  function selectTab(index: number) {
    activeTab = index;
  }
</script>

<div class="tabs">
  <div class="tab-headers">
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each tabs as tab, index}
      <button
        class="tab-header"
        class:primary={index === activeTab}
        class:outline={index === activeTab}
        onclick={() => selectTab(index)}
      >
        {tab.name}
      </button>
    {/each}
  </div>

  <div class="tab-content">
    {#if tabs[activeTab]}
      {@const SvelteComponent_1 = tabs[activeTab].content}
      <SvelteComponent_1 />
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
