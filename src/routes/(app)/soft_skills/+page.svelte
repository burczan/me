<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="Soft skills" />

<List caption="Soft skills">
  {#each data.softSkills as skill}
    <li>{skill}</li>
  {/each}
</List>
