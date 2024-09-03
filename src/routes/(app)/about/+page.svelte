<script lang="ts">
  import { onMount } from "svelte";
  import { Ghost } from "lucide-svelte";
  import { generateToC } from "$lib/utils/generateToC";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  onMount(() => {
    generateToC(2, { insertTocHeading: false });

    const { hash } = document.location;
    const scrollTo = hash && document.getElementById(hash.slice(1));
    if (scrollTo) {
      scrollTo.scrollIntoView();
    }
  });
</script>

<SvelteHead title="About me" />

<div id="about-me">
  <h1><Ghost class="icon-h1" /> About me</h1>

  <div class="box">
    <article class="essay">
      <section id="toc"></section>

      <section>
        <h2>My code compiles, therefore I am</h2>
        <p>
          I approach software development with a strong focus on <strong
            >quality</strong
          >
          and <strong>craftsmanship</strong>. I take pride in writing
          <strong>clean</strong>
          and
          <strong>maintainable</strong> code, always striving to choose the right
          tools to deliver optimal solutions.
        </p>
        <p>
          In my free time, I enjoy <strong>crocheting</strong>, which reflects
          my appreciation for craftsmanship, and helps me maintain a healthy
          work-life balance.
        </p>
      </section>

      <section>
        <h2>Soft Skills Daemon: Running in the Background</h2>
        <ul>
          {#each data.softSkills as skill}
            <li>{skill}</li>
          {/each}
        </ul>
      </section>

      <section>
        <h2>Blocks, Chains, and Data Pains</h2>
        <p>
          I have a growing interest in <strong>blockchain</strong>,
          <strong>data science</strong>, and
          <strong>artificial intelligence</strong>.
        </p>
        <p>
          While my academic background is not in STEM, my commitment to <strong
            >continuous learning</strong
          >, driven by a
          <strong>growth mindset</strong>, and followed by fascination for
          <strong>algorithms</strong> and <strong>data structures</strong>,
          <strong>mathematics</strong>, and theoretical
          <strong>computer science</strong> drive me to explore these fields.
        </p>
      </section>

      <section>
        <h2>Speech API: Running on Multiple Ports</h2>
        <ul>
          {#each data.spokenLanguages as { language, level }}
            <li><strong>{language}</strong> ({level})</li>
          {/each}
        </ul>
      </section>

      <section>
        <h2>Hacks & Stacks: My Toolkit Unpacked</h2>
        <ul>
          {#each data.technologies as technology}
            <li>{technology}</li>
          {/each}
        </ul>
      </section>
    </article>
  </div>
</div>

<style>
  section#toc {
    margin-bottom: 2rem;
  }
</style>
