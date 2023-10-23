<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Subcontainer from "$lib/components/Subcontainer.svelte";
  import SvelteHead from "$lib/components/SvelteHead.svelte";

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
