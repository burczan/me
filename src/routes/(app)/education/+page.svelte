<script lang="ts">
  import Container from "$lib/app/components/Container.svelte";
  import Subcontainer from "$lib/app/components/Subcontainer.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="Education" />

<Container>
  {#each data.education as { school, degree, dateRange }}
    <Subcontainer h2={school}>
      <h3>{@html degree}</h3>
      <h4>{dateRange}</h4>
    </Subcontainer>
  {/each}
</Container>
