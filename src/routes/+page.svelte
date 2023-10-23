<script>
  import { base } from "$app/paths";
  import Container from "$lib/components/Container.svelte";
  import SvelteHead from "$lib/components/SvelteHead.svelte";
</script>

<SvelteHead title="Home" />

<Container>
  <h2 class="text-rainbow-animation">Natalia Pospieszyńska</h2>

  <div class="columns">
    <div class="left">
      <p>
        Software engineer with a background in <span class="nes-text is-success"
          >software testing</span
        >.
      </p>
      <p>
        Interested primarily in
        <span class="nes-text is-success">backend development</span>
        in
        <span class="nes-text is-success">TypeScript</span> but also
        <span class="nes-text is-success"
          >open to <a href="{base}/techstack">tech stack</a></span
        >.
      </p>
      <p>
        Focused on writing a <span class="nes-text is-success">clean</span>,
        <span class="nes-text is-success">understandable</span>, and
        <span class="nes-text is-success">high quality</span> code.
      </p>
    </div>

    <div class="right">
      <p><i class="nes-charmander" /></p>
    </div>
  </div>
</Container>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1.5fr 0.5fr;
    margin-top: 2em;
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
