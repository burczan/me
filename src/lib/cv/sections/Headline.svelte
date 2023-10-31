<div class="grid-container">
  <div class="left">
    <h1><strong>Natalia Pospieszyńska</strong></h1>
  </div>

  <div class="center">
    <h1>
      <i class="fa-solid fa-code" />
    </h1>
  </div>
  <div class="right">
    <h1><strong>Software Engineer</strong></h1>
  </div>
</div>

<style>
  h1 {
    font-size: 4rem;
    display: inline;
  }

  .grid-container {
    display: grid;
    grid-template-areas: "left center right";
    margin-bottom: 1rem;
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
