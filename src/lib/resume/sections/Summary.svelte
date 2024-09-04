<script lang="ts">
  import { about, faIconClass } from "$lib/data";
</script>

<div class="box">
  <div id="headline">
    <h1 class="grid-container">
      <span class="left">{about.name}</span>

      <span class="center">
        <i class={faIconClass.headline} />
      </span>

      <span class="right">{about.role}</span>
    </h1>
  </div>

  <div id="summary-content" class="box-content">
    <p>
      I am a software engineer with a background in <strong
        >software testing</strong
      >
      and a deep interest in <strong>backend</strong> development. While I
      primarily focus on backend roles, I am also open to
      <strong>full-stack</strong> positions. Additionally, I am eager to expand
      my
      <strong>DevOps</strong> skills and gain further experience at a junior level.
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
</style>
