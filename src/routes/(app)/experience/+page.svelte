<script lang="ts">
  import { Shovel } from "@lucide/svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  let { data } = $props();

  const roles = data.experience.map((entry) => entry.role);
  let activeTabId = $state(0);
</script>

<SvelteHead title="Experience" />

<div id="experience">
  <h1><Shovel class="icon-h1" /> Experience</h1>

  <div role="group">
    {#each roles as role, id (id)}
      <button
        id={id.toString()}
        class:primary={id === activeTabId}
        class:outline={id !== activeTabId}
        onclick={() => (activeTabId = id)}
      >
        {role}
      </button>
    {/each}
  </div>

  <div class="box">
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each data.experience as { role, company, startDate, endDate, description, technologies }, id}
      {#if activeTabId === id}
        <h2><span class="green">{role}</span> @{company}</h2>
        <h3>{startDate} &ndash; {endDate}</h3>

        <ul>
          <!-- eslint-disable-next-line svelte/require-each-key -->
          {#each description as entry}
            <li>{entry}</li>
          {/each}
        </ul>

        {#if technologies}
          <b>Technologies:</b> {technologies.join(", ")}
        {/if}
      {/if}
    {/each}
  </div>
</div>
