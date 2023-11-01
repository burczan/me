<script lang="ts">
  import type { ComponentType } from "svelte";
  import AnkiScripts from "$lib/app/sections/projects/AnkiScripts.svelte";
  import CrochetAdminTools from "$lib/app/sections/projects/CrochetAdminTools.svelte";
  import Intraview from "$lib/app/sections/projects/Intraview.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import Toiper from "$lib/app/sections/projects/Toiper.svelte";
  import UnderPressure from "$lib/app/sections/projects/UnderPressure.svelte";

  const projects: APP_Project<ComponentType>[] = [
    {
      title: "Toiper",
      component: Toiper,
    },
    {
      title: "Intraview",
      component: Intraview,
    },
    {
      title: "Anki Scripts",
      component: AnkiScripts,
    },
    {
      title: "Under Pressure",
      component: UnderPressure,
    },
    {
      title: "Crocheting Admin Tools",
      component: CrochetAdminTools,
    },
  ];

  const projectNames = projects.map((project) => project.title);

  const setActiveTab = (tabId: number) => () => (activeTabId = tabId);

  let activeTabId = 0;
</script>

<SvelteHead title="Projects" />

<div class="nes-container is-dark grid-container">
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

<style>
  .grid-container {
    display: grid;
    grid-template-areas: "tabs content";
    grid-template-columns: 0.6fr 1.4fr;
  }

  .tabs {
    grid-area: tabs;
  }

  .content {
    grid-area: content;
  }
</style>
