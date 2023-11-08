<script lang="ts">
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import { projects } from "$lib/data";

  const projectNames = projects.map((project) => project.title);

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
          type="button"
          class="nes-btn"
          class:is-primary={id === activeTabId}
          on:click={setActiveTab(id)}
        >
          {name}
        </button>
      </p>
    {/each}
  </div>

  <div class="content">
    {#each projects as project, id}
      {#if activeTabId === id}
        <div class="nes-container is-rounded is-dark">
          <h2 class="nes-text is-success">{project.title}</h2>
          <svelte:component this={project.component} {project} />
        </div>
      {/if}
    {/each}
  </div>
</div>
