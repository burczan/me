<script lang="ts">
  import { CalendarRange } from "lucide-svelte";
  import type { Project } from "$lib/types";

  export let project: Project;
</script>

<article>
  <p class="text-center">
    <small>
      <CalendarRange class="icon-small" />
      {project.started} &ndash; Present
    </small>
  </p>

  <h3>
    Engineering the Intangible:<br />The Essential Handbook for Engineers Who
    Refuse to Lose Their Minds While Navigating a World Where the Only Certainty
    Is That Your Stack Will Never Stop Changing
  </h3>

  <p class="text-center">
    <small>(╯°□°）╯︵ ┻━┻</small>
  </p>

  <section id="introduction">
    <p>
      The <i>Engineering the Intangible</i> project was born to tackle a challenge
      every engineer faces: the need to stay up-to-date with rapidly changing technologies
      while also building the soft skills that are crucial for career growth. Unlike
      many existing resources that can be too generic, overly complex, or aimed at
      those with a background in psychology, this project takes a straightforward
      approach tailored to the analytical mindset of engineers.
    </p>

    <p>
      The goal is to create an accessible tool that not only boosts job
      performance but also supports overall personal development in all areas of
      life. By focusing on mastering timeless competencies, this project aims to
      help you sustain long-term success and continuous growth.
    </p>
  </section>

  <section id="context">
    <h4>Context</h4>
    <p>
      In the rapidly changing IT world, where new technologies mushroom, certain
      core competencies—such as adaptability and effective communication—remain
      essential. Mastering these skills not only ensures your long-term career
      success but also makes daily work life more satisfying.
    </p>
    <p>
      While technical skills can quickly become outdated, these timeless
      competencies provide a stable foundation, helping you stay adaptable and
      valuable no matter how the industry changes.
    </p>
  </section>

  <section id="motivation-behind-this-project">
    <h4>Motivation Behind This Project</h4>
    <p>
      This project is born from my own experience in the IT field, where I saw a
      growing need to develop non-technical skills alongside technical
      expertise. Even though there are resources out there discussing these
      competencies, I found a lack of options that specifically cater to the
      unique needs of technical professionals.
    </p>
    <p>
      To fill this gap, I have developed a straightforward approach to foster
      these timeless competencies. My goal is to create a tool that is:
    </p>
    <ul>
      <li>
        <b>Simple</b><br />
        Fits into busy schedule without being overwhelming.
      </li>
      <li>
        <b>Easy to Use</b><br />
        Requires no prior expertise in psychology or HR.
      </li>
      <li>
        <b>Plug-and-Play</b><br />
        Ready for immediate use with minimal setup.
      </li>
      <li>
        <b>Flexible</b><br />
        Useful for both professional and personal development.
      </li>
    </ul>
  </section>

  <section id="theoretical-foundation">
    <h4>Theoretical Foundation</h4>
    <p>
      The <i>Engineering the Intangible</i> project draws on established competency
      models, particularly those by Spencer & Spencer (1993), who define competencies
      as the "underlying characteristics of an individual related to effective and
      superior performance." These characteristics include deeper qualities such
      as motives, traits, and self-concept, which are crucial for long-term success,
      especially in fields where technical skills can quickly become outdated.
    </p>
    <p>
      As statistician George Box famously said, <q
        >All models are wrong, but some are useful.</q
      > This project embraces that idea, offering a framework that, while not perfect,
      is designed to be practical and adaptable across various professional contexts.
    </p>
  </section>

  <section id="goal-of-the-project">
    <h4>Goal of the Project</h4>
    <p>
      The primary goal of this project is to develop a structured, accessible
      approach for tracking and enhancing intangible skills, especially for
      those who lack formal training in psychology or human resources. This tool
      is intended to support self-improvement in both your professional and
      personal life.
    </p>
  </section>

  <section id="target-audience">
    <h4>Target Audience</h4>
    <p>
      While this framework is developed from a software engineer's perspective,
      its focus on timeless competencies makes it relevant to anyone looking to
      grow personally and professionally, no matter where they are in their
      career—whether they're just starting out, stepping into leadership, or
      navigating new challenges in a constantly changing world.
    </p>
    <p>
      For junior engineers, the need to acquire extensive technical skills can
      be overwhelming, and the importance of non-technical skills is frequently
      overlooked or underestimated. This tool helps them develop these broader
      skills, which are crucial for comprehensive growth. Mid-career
      professionals transitioning into leadership roles will also find this
      framework valuable, as these intangible competencies become increasingly
      critical.
    </p>
  </section>

  <section id="key-use-cases">
    <h4>Key Use Cases</h4>
    <ul>
      <li>
        <b>Interview Preparation</b><br />Strengthen key competencies to better
        articulate your skills and experience.
      </li>
      <li>
        <b>Ongoing Personal Development</b><br />Plan your career growth by
        strategically building the soft skills you need.
      </li>
    </ul>
    <p>
      For example, a software engineer preparing for an interview could use this
      tool to identify and enhance relevant non-technical skills, helping them
      develop clear, concise narratives to share during the interview.
    </p>
    <p>
      Similarly, a mid-career software engineer aiming to switch into a
      managerial role might use this framework to strategically plan their skill
      development, making their transition smoother and more effective.
    </p>
  </section>

  <section id="benefits">
    <h4>Benefits</h4>
    <ul>
      <li>
        <b>Increased Self-Awareness</b><br />
        Understand your strengths and areas for improvement, accelerating your career
        progress and boosting job satisfaction.
      </li>
      <li>
        <b>Objective Measurement</b><br />
        Track your growth over time using a clear, structured approach, helping you
        achieve both short-term and long-term goals.
      </li>
      <li>
        <b>Gap Identification</b><br />
        Proactively address skill gaps to prepare for future challenges, keeping
        you competitive in your field.
      </li>
      <li>
        <b>Well-Rounded Growth</b><br />
        Improve your effectiveness in all areas of life and enhance your ability
        to adapt to new roles and responsibilities.
      </li>
    </ul>
  </section>

  <p class="text-center">
    <small>(ヘ･_･)ヘ┳━┳</small>
  </p>
</article>
