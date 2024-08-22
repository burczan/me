<script lang="ts">
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const fields = data.education.map((entry) => entry.field);

  const setActiveTab = (tabId: number) => () => (activeTabId = tabId);

  let activeTabId = 0;
</script>

<SvelteHead title="Education" />

<div class="tabs-grid-container">
  <div class="tabs">
    {#each fields as field, id}
      <p>
        <button
          id={id.toString()}
          type="button"
          class="nes-btn"
          class:is-primary={id === activeTabId}
          on:click={setActiveTab(id)}
        >
          {field}
        </button>
      </p>
    {/each}
  </div>

  <div class="content">
    {#each data.education as { school, city, country, website, field, subfield, degree, dateRange }, id}
      {#if activeTabId === id}
        <div class="nes-container is-rounded is-dark">
          <h2 class="nes-text is-primary">
            {#if website}
              <a href={website} title={school} rel="noopener" target="_blank"
                >{school}</a
              >
            {:else}
              {school}
            {/if}
          </h2>
          <h3 class="nes-text">({city}, {country})</h3>
          <h3>
            {degree},
            <span class="nes-text is-success">{field}</span>{#if subfield},
              {subfield}
            {/if}
          </h3>
          <h4>{dateRange}</h4>
        </div>
      {/if}
    {/each}
  </div>
</div>
