<script>
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="Home" />

<div class="columns">
  <div class="left">
    <h1 class="text-rainbow-animation">{data.about.name}</h1>

    <h2 class="nes-text is-success">
      <a href={data.about.contact.linkedin.href} rel="noopener" target="_blank">
        {data.about.role}
      </a>
    </h2>

    <p>
      I am a software engineer with a background in <span
        class="nes-text is-success">software testing</span
      >
      and a deep interest in <span class="nes-text is-success">backend</span>
      development with
      <span class="nes-text is-success">TypeScript</span>.
    </p>
    <p>
      My primary focus is on backend roles, though I am also open to <span
        class="nes-text is-success">full-stack</span
      >
      development and interested in gaining experience in
      <span class="nes-text is-success">DevOps</span> at a junior level.
    </p>
  </div>

  <div class="right">
    <p><i class="nes-charmander" /></p>
  </div>
</div>

<style>
  h1 {
    margin-bottom: 1em;
  }

  h2 {
    margin-bottom: 2em;
  }

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
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .text-rainbow-animation {
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet,
      red
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-name: rainbow-animation;
    animation-duration: 360s;
    animation-timing-function: cubic-bezier(1, -0.08, 0, 1.12);
    animation-iteration-count: infinite;
  }

  @keyframes rainbow-animation {
    to {
      background-position: 4500vh;
    }
  }
</style>
