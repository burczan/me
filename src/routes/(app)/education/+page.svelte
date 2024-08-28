<script lang="ts">
  import { GraduationCap } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const fields = data.education.map((entry) => entry.field);
  let activeTabId = 0;
</script>

<SvelteHead title="Education" />

<div id="education">
  <h2 class="orange"><GraduationCap class="icon-h2" /> Education</h2>

  <div role="group">
    {#each fields as field, id}
      <button
        id={id.toString()}
        class:primary={id === activeTabId}
        class:outline={id !== activeTabId}
        on:click={() => (activeTabId = id)}
      >
        {field}
      </button>
    {/each}
  </div>

  <div class="box">
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
