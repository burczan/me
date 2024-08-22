<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const roles = data.experience.map((entry) => entry.role);

  const setActiveTab = (tabId: number) => () => (activeTabId = tabId);

  let activeTabId = 0;
</script>

<SvelteHead title="Experience" />

<div class="tabs-grid-container">
  <div class="tabs">
    {#each roles as role, id}
      <p>
        <button
          id={id.toString()}
          type="button"
          class="nes-btn"
          class:is-primary={id === activeTabId}
          on:click={setActiveTab(id)}
        >
          {role}
        </button>
      </p>
    {/each}
  </div>

  <div class="content">
    {#each data.experience as { role, company, startDate, endDate, descriptionShortened, technologies }, id}
      {#if activeTabId === id}
        <div class="nes-container is-rounded is-dark">
          <h2>
            <span class="nes-text is-success">{role}</span>
            <span class="nes-text is-primary">@ {company}</span>
          </h2>
          <h3>{startDate} - {endDate}</h3>

          <div class="columns">
            <div class="left">
              <List caption="Description">
                {#each descriptionShortened as entry}
                  <li>{entry}</li>
                {/each}
              </List>
            </div>

            {#if technologies}
              <div class="right">
                <List caption="Technologies">
                  {#each technologies as tech}
                    <li>{tech}</li>
                  {/each}
                </List>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1.3fr 0.7fr;
    gap: 2em;
  }

  .columns .left {
    grid-area: left;
  }

  .columns .right {
    grid-area: right;
  }
</style>
