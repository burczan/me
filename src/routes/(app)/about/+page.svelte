<script lang="ts">
  import { afterUpdate } from "svelte";
  import { Ghost } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  afterUpdate(() => {
    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  });
</script>

<SvelteHead title="About me" />

<div id="about-me">
  <h2 class="yellow"><Ghost class="icon-h2" /> About me</h2>

  <div class="box">
    <details>
      <summary>My code compiles, therefore I am</summary>
      <div class="content">
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
      </div>
    </details>

    <details>
      <summary>Soft Skills Daemon: Running in the Background</summary>
      <div class="content">
        <ul>
          {#each data.softSkills as skill}
            <li>{skill}</li>
          {/each}
        </ul>
      </div>
    </details>

    <details>
      <summary>Blocks, Chains, and Data Pains</summary>
      <div class="content">
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
      </div>
    </details>

    <details>
      <summary>Speech API: Running on Multiple Ports</summary>
      <div class="content">
        <ul>
          {#each data.spokenLanguages as { language, level }}
            <li><strong>{language}</strong> ({level})</li>
          {/each}
        </ul>
      </div>
    </details>

    <details>
      <summary>Hacks & Stacks: My Toolkit Unpacked</summary>
      <div class="content">
        <ul>
          {#each data.technologies as technology}
            <li>{technology}</li>
          {/each}
        </ul>
      </div>
    </details>
  </div>
</div>

<style>
  details summary {
    font-weight: bold;
    text-decoration: underline;
    text-transform: capitalize;
  }

  details div.content {
    width: 70%;
    padding: 1rem;
    text-align: justify;
  }
</style>
