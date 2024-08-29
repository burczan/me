<script lang="ts">
  import "@picocss/pico";
  import "@picocss/pico/css/pico.colors.min.css";
  import { CodeXml, Construction } from "lucide-svelte";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import "./app.css";

  export let data;
</script>

<svelte:head>
  <meta name="color-scheme" content="light dark" />
</svelte:head>

<div class="grid-container">
  <nav>
    <ul>
      <li><a href="{base}/">{data.about.name} <CodeXml /></a></li>
    </ul>
    <ul>
      {#each data.navbarItems as { name, href }}
        <li>
          <a
            href="{base}{href}"
            class:orange={`${base}${href}` === $page.url.pathname}
            class:contrast={`${base}${href}` === $page.url.pathname}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <main>
    <slot />
  </main>

  <footer>
    <span
      ><Construction /> &MediumSpace; ▅ ▅ ▅ ▅ ▅ ▅ ▅ ▁ ▁ ▁ &MediumSpace; <Construction
      />
    </span>
  </footer>
</div>

<style>
  .grid-container {
    height: 100vh;
    display: grid;
    grid-template-areas:
      "nav"
      "main"
      "footer";
    grid-template-rows: 4em 1fr 4em;
    width: 80%;
    margin: auto;
  }

  nav {
    grid-area: nav;
    display: flex;
    justify-content: space-between;
  }

  main {
    grid-area: main;
    padding: 1rem;
  }

  footer {
    grid-area: footer;
    margin: auto;
    width: 50%;
    font-size: smaller;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }
</style>
