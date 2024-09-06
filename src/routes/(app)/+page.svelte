<script lang="ts">
  import { BrainCircuit, CodeXml } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  export let data;
</script>

<SvelteHead title="Home" />

<div id="home">
  <h1><CodeXml class="icon-h1" /> {data.about.role}</h1>

  <div class="box columns">
    <div class="left">
      <p>
        I am a software engineer with a background in <strong
          >software testing</strong
        >
        and a deep interest in <strong>backend</strong> development.
      </p>
      <p>
        While I primarily focus on backend roles, I am also open to
        <strong>full-stack</strong> positions. Additionally, I am eager to
        deepen my <strong>DevOps</strong> skills and gain more experience at a junior
        level.
      </p>

      <p>
        Currently, my focus is on mastering technical skills and deepening my
        expertise. However, in the future, I am interested in transitioning into
        <strong>leadership</strong> roles, where I can leverage both my
        technical knowledge and <strong>mentoring</strong> experience.
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
