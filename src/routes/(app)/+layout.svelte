<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import "./app.css";

  export let data;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/nes.css@latest/css/nes.min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/nes.icons@latest/css/nes-icons.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
    rel="stylesheet"
  />
  <style>
    body {
      background-color: #4e4e4e;
    }
  </style>
</svelte:head>

<div class="grid-container">
  <nav>
    {#each data.navbarItems as { name, href }}
      <a href="{base}{href}">
        <button
          type="button"
          class="nes-btn"
          class:is-primary={`${base}${href}` === $page.url.pathname}
        >
          {name}
        </button>
      </a>
    {/each}
  </nav>

  <main>
    <div class="nes-container is-dark">
      <slot />
    </div>
  </main>

  <footer>
    <p>0% [█ █ █ █ █ █ █ █ █ █] 100%</p>
  </footer>
</div>

<style>
  .grid-container {
    height: 100vh;
    padding: 3rem;
    display: grid;
    grid-template-areas:
      "nav"
      "main"
      "footer";
    grid-template-rows: 4em 1fr 4em;
  }

  nav {
    grid-area: nav;
    display: flex;
    justify-content: space-between;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    padding: 1em;
  }
</style>
