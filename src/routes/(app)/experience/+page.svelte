<script lang="ts">
  import { Shovel } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const roles = data.experience.map((entry) => entry.role);
  let activeTabId = 0;
</script>

<SvelteHead title="Experience" />

<div id="experience">
  <h2 class="orange"><Shovel class="icon-h2" /> Experience</h2>

  <div role="group">
    {#each roles as role, id}
      <button
        id={id.toString()}
        class:primary={id === activeTabId}
        class:outline={id !== activeTabId}
        on:click={() => (activeTabId = id)}
      >
        {role}
      </button>
    {/each}
  </div>

  <div class="box">
    {#each data.experience as { role, company, startDate, endDate, descriptionShortened, technologies }, id}
      {#if activeTabId === id}
        <h2><span class="green">{role}</span> @{company}</h2>
        <h3>{startDate} &ndash; {endDate}</h3>

        <ul>
          {#each descriptionShortened as entry}
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
