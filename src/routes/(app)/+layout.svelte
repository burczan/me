<script lang="ts">
  import "@picocss/pico";
  import "@picocss/pico/css/pico.colors.min.css";
  import { CodeXml, Construction } from "lucide-svelte";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import GoToTop from "$lib/app/components/GoToTop.svelte";
  import "./app.scss";

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

  <GoToTop showAtPixel={0} />
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
    margin: auto;

    @media (min-width: 768px) {
      width: 90%;
    }

    @media (min-width: 1280px) {
      width: 80%;
    }

    @media (min-width: 1523px) {
      width: 70%;
    }
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
    padding-bottom: 2rem;
  }
</style>
