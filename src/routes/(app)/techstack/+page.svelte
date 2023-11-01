<script lang="ts">
  import Container from "$lib/app/components/Container.svelte";
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="Tech stack" />

<Container>
  <div class="columns">
    <div class="left">
      <List caption="Current tech stack">
        {#each data.currentTechstack as { tech, favourite }}
          <li>
            {tech}
            {#if favourite}
              <i class="nes-icon is-small heart" />
            {/if}
          </li>
        {/each}
      </List>
    </div>

    <div class="central">
      <List caption="Happy to learn">
        {#each data.futureTechstack as entry}
          <li>{entry}</li>
        {/each}
      </List>
    </div>

    <div class="right">
      <List caption="Generally interested in">
        {#each data.generallyInterested as entry}
          <li style:text-transform="capitalize">{entry}</li>
        {/each}
      </List>
    </div>
  </div>
</Container>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left central right";
    grid-template-columns: 0.5fr 0.5fr 1fr;
  }

  .left {
    grid-area: left;
  }

  .central {
    grid-area: central;
  }

  .right {
    grid-area: right;
  }
</style>
