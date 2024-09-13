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
        I'm a <strong>backend</strong> software engineer with a strong
        foundation in <strong>software testing</strong>, passionate about
        building efficient, scalable, and high-quality solutions. My expertise
        lies in <strong>TypeScript</strong>, <strong>Node.js</strong>,
        <strong>AWS</strong>, though I adopt a
        <strong>technology-agnostic</strong> approach.
      </p>

      <p>
        While my primary focus is on backend roles, I'm open to contributing to
        <strong>full-stack</strong> development when needed, and I am
        continuously expanding my
        <strong>DevOps</strong> skills.
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
