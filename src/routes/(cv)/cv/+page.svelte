<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import Contact from "$lib/cv/sections/Contact.svelte";
  import Craftsmanship from "$lib/cv/sections/Craftsmanship.svelte";
  import Education from "$lib/cv/sections/Education.svelte";
  import Experience from "$lib/cv/sections/Experience.svelte";
  import FutureCareerGoals from "$lib/cv/sections/FutureCareerGoals.svelte";
  import GeneralInterests from "$lib/cv/sections/GeneralInterests.svelte";
  import SoftSkills from "$lib/cv/sections/SoftSkills.svelte";
  import SpokenLanguages from "$lib/cv/sections/SpokenLanguages.svelte";
  import Summary from "$lib/cv/sections/Summary.svelte";
  import Technologies from "$lib/cv/sections/Technologies.svelte";

  onMount(() => {
    document.body.classList.add("A4");
  });

  afterUpdate(() => {
    const faIcons = document.querySelectorAll('i[class^="fa-"]');
    faIcons.forEach((icon) => {
      icon.classList.add("fa-fw");
    });
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
</svelte:head>

<div id="page1" class="sheet padding-10mm">
  <div class="grid-container">
    <header class="header">
      <Summary />
    </header>

    <main class="main">
      <Experience />
    </main>

    <aside class="sidebar">
      <Contact />
      <Technologies />
      <SoftSkills />
    </aside>
  </div>
</div>

<div id="page2" class="sheet padding-10mm">
  <div class="grid-container">
    <main class="main">
      <FutureCareerGoals />
      <Education />
      <Craftsmanship />
    </main>

    <aside class="sidebar">
      <SpokenLanguages />
      <GeneralInterests />
    </aside>

    <footer class="footer"></footer>
  </div>
</div>

<style>
  .grid-container {
    min-height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
  }

  .header {
    display: grid;
    grid-area: header;
    align-content: baseline;
    align-items: center;
    margin-bottom: 2rem;
  }

  .main {
    display: grid;
    grid-auto-flow: row;
    grid-area: main;
    grid-row-gap: 3rem;
    align-content: baseline;
    align-items: baseline;

    width: 96%;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .footer {
    grid-area: footer;
    align-self: end;
  }
</style>
