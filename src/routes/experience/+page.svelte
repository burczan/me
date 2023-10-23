<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import List from "$lib/components/List.svelte";
  import Subcontainer from "$lib/components/Subcontainer.svelte";
  import SvelteHead from "$lib/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="Experience" />

<Container>
  {#each data.experience as { role, company, startDate, endDate, description, skills }}
    <Subcontainer>
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
            {#each skills as skill}
              <li>{skill}</li>
            {/each}
          </List>
        </div>
      </div>
    </Subcontainer>
  {/each}
</Container>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1.5fr 0.5fr;
    gap: 2em;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }
</style>
