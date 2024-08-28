<script lang="ts">
  import { BrainCircuit, CodeXml } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  export let data;
</script>

<SvelteHead title="Home" />

<div id="home">
  <h2 class="orange"><CodeXml class="icon-h2" /> {data.about.role}</h2>

  <div class="box columns">
    <div class="left">
      <p>
        I am a software engineer with a background in <strong
          >software testing</strong
        >
        and a deep interest in <strong>backend</strong>
        development with <strong>TypeScript</strong>.
      </p>
      <p>
        My primary focus is on backend roles, though I am also open to <strong
          >full-stack</strong
        >
        development and interested in gaining experience in
        <strong>DevOps</strong> at a junior level.
      </p>
    </div>

    <div class="right">
      <BrainCircuit class="orange" size="128" absoluteStrokeWidth={true} />
    </div>
  </div>
</div>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1fr 0.5fr;
    column-gap: 5em;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
    margin: auto;
  }
</style>
