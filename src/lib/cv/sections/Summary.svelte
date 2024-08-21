<script lang="ts">
  import { about, faIconClass } from "$lib/data";
</script>

<div class="box">
  <div id="headline" class="grid-container">
    <div class="left">
      <span class="headline"><strong>{about.name}</strong></span>
    </div>

    <div class="center">
      <span class="headline"><i class={faIconClass.headline} /></span>
    </div>

    <div class="right">
      <span class="headline"><strong>{about.role}</strong></span>
    </div>
  </div>

  <div id="summary-content" class="box-content">
    <p>
      I am a software engineer with a background in <strong
        >software testing</strong
      >
      and a deep interest in <strong>backend</strong> development with
      <strong>TypeScript</strong>.
    </p>
    <p>
      My primary focus is on backend roles, though I am also open to <strong
        >full-stack</strong
      >
      development and interested in gaining experience in
      <strong>DevOps</strong> at a junior level.
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-areas: "left center right";
  }

  .left {
    grid-area: left;
    justify-self: start;
  }

  .center {
    grid-area: center;
    justify-self: center;
  }

  .right {
    grid-area: right;
    justify-self: end;
  }

  span.headline {
    font-size: xx-large;
  }
</style>
