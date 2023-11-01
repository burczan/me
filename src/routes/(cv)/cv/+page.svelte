<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import Contact from "$lib/cv/sections/Contact.svelte";
  import CurrentTechstack from "$lib/cv/sections/CurrentTechstack.svelte";
  import Education from "$lib/cv/sections/Education.svelte";
  import Experience from "$lib/cv/sections/Experience.svelte";
  import Footer from "$lib/cv/sections/Footer.svelte";
  import FutureTechstack from "$lib/cv/sections/FutureTechstack.svelte";
  import Headline from "$lib/cv/sections/Headline.svelte";
  import InterestedIn from "$lib/cv/sections/InterestedIn.svelte";
  import SoftSkills from "$lib/cv/sections/SoftSkills.svelte";
  import SpokenLanguages from "$lib/cv/sections/SpokenLanguages.svelte";
  import Summary from "$lib/cv/sections/Summary.svelte";

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
    href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.min.css"
  />
</svelte:head>

<div id="page1" class="sheet">
  <div class="container grid-container">
    <header class="header">
      <div class="headline">
        <Headline />
      </div>
      <div class="summary">
        <Summary />
      </div>
      <div id="contact" class="contact">
        <Contact />
      </div>
    </header>

    <main class="main">
      <Experience />
    </main>

    <aside class="sidebar">
      <CurrentTechstack />
      <FutureTechstack />
      <SpokenLanguages />
    </aside>
  </div>
</div>

<div id="page2" class="sheet">
  <div class="container grid-container">
    <header class="header">
      <div class="headline">
        <Headline />
      </div>
      <div class="summary">
        <Summary />
      </div>
      <div class="contact">
        <Contact />
      </div>
    </header>

    <main class="main">
      <Education />
    </main>

    <aside class="sidebar">
      <SoftSkills />
      <InterestedIn />
    </aside>

    <footer class="footer">
      <Footer />
    </footer>
  </div>
</div>

<style>
  .grid-container {
    margin-top: 2rem;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
  }

  .header {
    display: grid;
    grid-area: header;
    grid-template-columns: 1.4fr 0.6fr;
    grid-template-areas:
      "headline headline"
      "summary contact"
      "summary contact";
    align-content: baseline;
    align-items: center;
  }

  .contact {
    grid-area: contact;
  }

  .headline {
    grid-area: headline;
  }

  .summary {
    grid-area: summary;
  }

  .main {
    display: grid;
    grid-auto-flow: row;
    grid-area: main;
    align-content: baseline;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .footer {
    grid-area: footer;
    align-self: end;
  }
</style>
