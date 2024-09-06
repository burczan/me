<script lang="ts">
  import { onMount } from "svelte";
  import { Ghost } from "lucide-svelte";
  import { base } from "$app/paths";
  import { generateToC } from "$lib/utils/generateToC";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import viridiAchievementsImg from "$lib/assets/viridi_achievements.png";

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
          <strong>backend</strong> development. While I primarily focus on
          backend roles, I am also open to <strong>full-stack</strong>
          positions. Additionally, I am eager to deepen my
          <strong>DevOps</strong> skills and gain more experience at a junior level.
        </p>
        <p>
          Currently, my focus is on mastering technical skills and deepening my
          expertise. However, in the future, I am interested in transitioning
          into <strong>leadership</strong> roles, where I can leverage both my
          technical knowledge and <strong>mentoring</strong> experience.
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
          While <strong>TypeScript</strong> is my primary programming language,
          I take a <strong>technology-agnostic</strong> approach, always striving
          to select the right tools for delivering optimal solutions. My understanding
          of computer science fundamentals allows me to quickly and efficiently learn
          new languages and technologies.
        </p>
        <p>
          Outside of work, I enjoy <strong>crocheting</strong>—an activity that
          mirrors my approach to development: thoughtful, precise, and
          rewarding. It also helps me maintain a
          <strong>healthy balance</strong> between work and life.
        </p>
      </section>

      <section>
        <h2>Version Control: My Next Career Update</h2>
        <p>
          Looking ahead, I am increasingly drawn to <strong>AI</strong>,
          <strong>data science</strong>, and <strong>blockchain</strong>.
        </p>
        <p>
          While my academic background is not in STEM, my commitment to
          <strong>continuous learning</strong>, driven by a
          <strong>growth mindset</strong>, and a solid foundation in computer
          science drive me to explore these fields. My
          <strong>diverse experiences</strong>, from instructional design to
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

        <dl>
          <dt><strong>Continuous learning</strong></dt>
          <dd>
            <p>
              I continually seek new knowledge and skills to stay ahead in the
              rapidly changing world.
            </p>
          </dd>

          <dt><strong>Growth mindset</strong></dt>
          <dd>
            <p>I view every challenge as an opportunity for growth.</p>
          </dd>

          <dt><strong>Openness to feedback</strong></dt>
          <dd>
            <p>
              Feedback is a key to improvement, and I highly value constructive
              criticism.
            </p>
          </dd>

          <dt>
            <strong>Persistence</strong>
            <sup><a href="#fn1" id="r1">[1]</a></sup>
            and <strong>resilience</strong>
          </dt>
          <dd>
            <p>
              These traits help me push through challenges and stay focused on
              long-term goals.
            </p>
          </dd>
        </dl>

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
        <h2>Dependencies Installed: My Tech Skills</h2>

        <dl>
          {#each Object.keys(data.techSkills) as section}
            <dt><strong>{data.techSkills[section].display}</strong></dt>
            <dd>
              <p>{data.techSkills[section].skills.join(", ")}</p>
            </dd>
          {/each}
        </dl>

        <p>I am also handy with a hammer, shovel, and other hardware tools.</p>
      </section>

      <section>
        <h2>Idle Threads: What Keeps Me Thinking</h2>

        <dl>
          {#each data.interests as interest}
            <dt><strong>{interest.name}</strong></dt>
            <dd><p>{interest.description}</p></dd>
          {/each}
        </dl>
      </section>

      <section>
        <h2>Speech API: Running on Multiple Ports</h2>
        <ul>
          {#each data.spokenLanguages as { language, level }}
            <li><strong>{language}</strong> ({level})</li>
          {/each}
        </ul>
      </section>

      <section id="footnotes">
        <hr />
        <p id="fn1">
          <sup><a href="#r1">[1]</a></sup> It took me almost 2 years to unlock
          all
          <a
            href={viridiAchievementsImg}
            rel="noopener"
            target="_blank"
            title="Viridi Achievements Stats"
          >
            47 achievements
          </a>
          in
          <a
            href="https://store.steampowered.com/app/375950/Viridi/"
            rel="noopener"
            target="_blank"
            title="Viridi on Steam"
          >
            Viridi
          </a>. But I have more example of my persistence.
        </p>
      </section>
    </article>
  </div>
</div>
