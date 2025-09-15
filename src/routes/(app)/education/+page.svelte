<script lang="ts">
  import { GraduationCap } from "@lucide/svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  let { data } = $props();

  const fields = data.education.map((entry) => entry.field);
  let activeTabId = $state(0);
</script>

<SvelteHead title="Education" />

<div id="education">
  <h1><GraduationCap class="icon-h1" /> Education</h1>

  <div role="group">
    {#each fields as field, id (id)}
      <button
        id={id.toString()}
        class:primary={id === activeTabId}
        class:outline={id !== activeTabId}
        onclick={() => (activeTabId = id)}
      >
        {field}
      </button>
    {/each}
  </div>

  <div class="box">
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each data.education as { school, city, country, website, field, subfield, degree, dateRange }, id}
      {#if activeTabId === id}
        <h3>
          {#if website}
            <a href={website} title={school} rel="noopener" target="_blank"
              >{school}</a
            >
          {:else}
            {school}
          {/if} ({city}, {country})
        </h3>
        <h4>
          {degree},
          <span class="green">{field}</span>{#if subfield},
            {subfield}
          {/if}
        </h4>
        <h5>{dateRange}</h5>
      {/if}
    {/each}
  </div>
</div>
