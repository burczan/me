<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  export let data;
</script>

<div class="container">
  <nav>
    {#each data.navbarItems as { name, href }}
      <a href="{base}{href}">
        <button
          type="button"
          class="nes-btn"
          class:is-primary={href === $page.url.pathname}>
          {name}
        </button>
      </a>
    {/each}
  </nav>

  <main>
    <slot />
  </main>

  <footer>
    <p>0% [█ █ █ █ █ █ █ █ █ █] 100%</p>
  </footer>
</div>

<style>
  .container {
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
