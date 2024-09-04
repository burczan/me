<script lang="ts">
  import { onMount } from "svelte";
  import { Ghost } from "lucide-svelte";
  import { base } from "$app/paths";
  import { generateToC } from "$lib/utils/generateToC";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const eiProject = data.projects[0];

  onMount(() => {
    generateToC(2);

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
        <h2>Initial Commit: Laying the Foundation</h2>
        <p>
          I am a software engineer with a background in
          <strong>software testing</strong> and a deep interest in
          <strong>backend</strong> development. My primary focus is on backend
          roles, though I am also open to <strong>full-stack</strong> positions
          with a backend emphasis. Additionally, I am eager to expand my
          <strong>DevOps</strong> skills at a junior level.
        </p>
        <p>
          While I currently focus on mastering technical skills, I also find
          great fulfillment in <strong>mentoring</strong> others. As I progress
          in my career, I am open to exploring <strong>leadership</strong> roles,
          where I can nurture technical talent while driving impactful solutions.
        </p>
      </section>

      <section>
        <h2>My Code Compiles, Therefore I Am</h2>
        <p>
          I approach software development with a strong emphasis on <strong
            >quality</strong
          >, <strong>pragmatism</strong>, and <strong>craftsmanship</strong>.
        </p>
        <p>
          Although <strong>TypeScript</strong> is my primary programming
          language, I take <strong>technology-agnostic</strong> approach, always
          striving to choose the right tools to deliver optimal solutions. My understanding
          of the theoretical foundations of computer science allows me to quickly
          and efficiently learn new languages and technologies.
        </p>
        <p>
          Outside of work, I enjoy <strong>crocheting</strong>—an activity that
          mirrors my approach to development: thoughtful, precise, and
          rewarding. It also helps me maintain a healthy
          <strong>work-life balance</strong>.
        </p>
      </section>

      <section>
        <h2>Version Control: My Next Career Update</h2>
        <p>
          As I look ahead in my career, I am increasingly drawn to <strong
            >artificial intelligence</strong
          >, <strong>data science</strong>, and <strong>blockchain</strong>.
        </p>
        <p>
          While my academic background is not in STEM, my commitment to
          <strong>continuous learning</strong>, driven by a
          <strong>growth mindset</strong>, and a solid foundation in computer
          science drive me to explore these fields. My
          <strong>diverse experience</strong>, from instructional design to
          sound engineering, have given me a unique perspective and the ability
          to approach complex challenges <strong>creatively</strong> and
          <strong>pragmatically</strong>.
        </p>
      </section>

      <section>
        <h2>Soft Skills Daemon: Running in the Background</h2>
        <p>
          Effective software development goes beyond technical expertise, and
          soft skills play a significant role in my approach to work.
        </p>

        <ul>
          <li>
            <strong>Continuous learning</strong><br />
            I actively seek out new knowledge and skills to keep up with the rapidly
            changing world.
          </li>
          <li>
            <strong>Growth mindset</strong><br />
            I view every challenge as an opportunity for growth.
          </li>
          <li>
            <strong>Openness to feedback</strong><br />
            Feedback is a key to improvement, so I value constructive criticism.
          </li>
          <li>
            <strong>Persistence</strong> and <strong>resilience</strong><br />
            These traits help me push through challenges and stay focused on long-term
            goals.
          </li>
        </ul>

        <p>
          Additional skills include <strong>adaptability</strong>,
          <strong>attention to detail</strong>, <strong>communication</strong>,
          <strong>problem-solving</strong>, and <strong>remote working</strong>.
        </p>

        <p>
          My project, <a
            href="{base}/projects/{eiProject.slug}"
            title={eiProject.shortTitle}
            rel="noopener"
            target="_blank">Engineering the Intangible</a
          >, reflects this commitment. It's designed to help engineers like
          myself grow both professionally and personally by focusing on
          often-overlooked competencies that are crucial for long-term success.
        </p>
      </section>

      <section>
        <h2>Idle Threads: What Keeps Me Thinking</h2>
        <ul>
          {#each data.generalInterests as interest}
            <li>{interest}</li>
          {/each}
        </ul>
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
        <h2>Dependencies Installed: My Tech Stack</h2>
        <ul>
          {#each data.technologies as technology}
            <li>{technology}</li>
          {/each}
        </ul>

        <p>As well as hammer, shovel, and other hardware tools.</p>
      </section>
    </article>
  </div>
</div>
