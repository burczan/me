<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const roles = data.experience.map((entry) => entry.role);

  const setActiveTab = (tabId: number) => () => (activeTabId = tabId);

  let activeTabId = 0;
</script>

<SvelteHead title="Experience" />

<div class="nes-container is-dark grid-container">
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
    {#each data.experience as { role, company, startDate, endDate, description, techSkills }, id}
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
                {#each description as entry}
                  <li>{entry}</li>
                {/each}
              </List>
            </div>

            <div class="right">
              <List caption="Skills">
                {#each techSkills as skill}
                  <li>{skill}</li>
                {/each}
              </List>
            </div>
          </div>
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

  .content .columns {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1.3fr 0.7fr;
    gap: 2em;
  }

  .content .columns .left {
    grid-area: left;
  }

  .content .columns .right {
    grid-area: right;
  }
</style>
