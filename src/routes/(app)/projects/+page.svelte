<script lang="ts">
  import type { ComponentType } from "svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import {
    AnkiScripts,
    CrochetAdminTools,
    Intraview,
    PlantUML,
    Toiper,
    UnderPressure,
  } from "$lib/app/sections/projects";

  const projects: Project<ComponentType>[] = [
    {
      title: "Anki Scripts",
      component: AnkiScripts,
    },
    {
      title: "Crocheting Admin Tools",
      component: CrochetAdminTools,
    },
    {
      title: "Intraview",
      component: Intraview,
    },
    {
      title: "PlantUML-is-your-friend",
      component: PlantUML,
    },
    {
      title: "Toiper",
      component: Toiper,
    },
    {
      title: "Under Pressure",
      component: UnderPressure,
    },
  ];

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
    {#each projects as { title, component }, id}
      {#if activeTabId === id}
        <div class="nes-container is-rounded is-dark">
          <h2 class="nes-text is-success">{title}</h2>
          <svelte:component this={component} />
        </div>
      {/if}
    {/each}
  </div>
</div>
