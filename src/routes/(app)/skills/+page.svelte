<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="Skills" />

<div class="columns">
  <div class="left">
    <List caption="Soft skills">
      {#each data.softSkills as skill}
        <li>{skill}</li>
      {/each}
    </List>
  </div>

  <div class="central">
    <List caption="Technologies">
      {#each data.technologies as technology}
        <li>{technology}</li>
      {/each}
    </List>
  </div>

  <div class="right">
    <List caption="Spoken languages">
      {#each data.spokenLanguages as { language, level }}
        <li>
          <span class="nes-text is-success">{language}</span><br />({level})
        </li>
      {/each}
    </List>
  </div>
</div>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left central right";
    grid-template-columns: 0.55fr 0.35fr 0.6fr;
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
