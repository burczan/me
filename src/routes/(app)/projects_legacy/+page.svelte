<script lang="ts">
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import { projectsLegacy } from "$lib/data";

  const projectNames = projectsLegacy.map((project) => project.title);

  const setActiveTab = (tabId: number) => () => (activeTabId = tabId);

  let activeTabId = 0;
</script>

<SvelteHead title="Projects" />

<div class="tabs-grid-container">
  <div class="tabs">
    {#each projectNames as name, id}
      <p>
        <button
          id={id.toString()}
          class:primary={id === activeTabId}
          class:outline={id !== activeTabId}
          on:click={setActiveTab(id)}
        >
          {name}
        </button>
      </p>
    {/each}
  </div>

  <div class="content">
    {#each projectsLegacy as project, id}
      {#if activeTabId === id}
        <div class="nes-container is-rounded is-dark">
          <h2 class="green">{project.title}</h2>
          <svelte:component this={project.component} {project} />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .tabs-grid-container {
    display: grid;
    grid-template-areas: "tabs content";
    grid-template-columns: 0.7fr 1.3fr;
  }

  .tabs-grid-container .tabs {
    grid-area: tabs;
  }

  .tabs-grid-container .content {
    grid-area: content;
  }
</style>
