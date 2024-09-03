<script lang="ts">
  import { CalendarRange } from "lucide-svelte";
  import { onMount } from "svelte";
  import type { Project } from "$lib/types";
  import { generateToC } from "$lib/utils/generateToC";
  import FlipTable from "$lib/app/components/FlipTable.svelte";
  import FixTable from "$lib/app/components/FixTable.svelte";

  export let project: Project;

  onMount(() => {
    generateToC(3);

    const { hash } = document.location;
    const scrollTo = hash && document.getElementById(hash.slice(1));
    if (scrollTo) {
      scrollTo.scrollIntoView();
    }
  });
</script>

<article class="project">
  <h2>
    Engineering the Intangible:<br />The Essential Handbook for Engineers Who
    Refuse to Lose Their Minds While Navigating a World Where the Only Certainty
    Is That Your Stack Will Never Stop Changing
  </h2>

  <section>
    <p class="text-center">
      <small>
        <CalendarRange class="icon-small" />
        {project.started} &ndash; Present (Research Phase)
      </small>
    </p>

    <section id="toc"></section>

    <section>
      <h3>Summary</h3>
      <p>
        The <i>Engineering the Intangible</i> project emerged from my own experience
        as a software engineer, when I realized the importance of balancing rapidly
        changing technical skills with lasting human abilities. In a world where
        technology quickly becomes outdated, skills like effective communication
        and adaptability are crucial for long-term success.
      </p>
      <p>
        This insight made me see a gap: many existing resources are either too
        generic, overly complex, or not well-suited for the analytical mindset
        of technical professionals. <i>Engineering the Intangible</i> aims to fill
        this gap by offering an approach tailored specifically for engineers and
        tech professionals. My aim is to create a tool that's easy to access and
        use, helping people improve their job performance while also fostering their
        personal growth.
      </p>
      <p>
        This project is my way of providing a straightforward and intuitive
        resource that supports the continuous development of these essential,
        intangible skills. By focusing on these competencies, it helps
        individuals grow both professionally and personally in a constantly
        changing world.
      </p>
    </section>

    <section>
      <h3>Introduction</h3>
      <p>
        The <i>Engineering the Intangible</i> project was born to tackle a challenge
        every engineer faces: the need to stay up-to-date with rapidly changing technologies
        while also building the soft skills that are crucial for career growth. Unlike
        many existing resources that can be too generic, overly complex, or aimed
        at those with a background in psychology, this project takes a straightforward
        approach tailored to the analytical mindset of engineers.
      </p>

      <p>
        The goal is to create an accessible tool that not only boosts job
        performance but also supports overall personal development in all areas
        of life. By focusing on mastering timeless competencies, this project
        aims to help you sustain long-term success and continuous growth.
      </p>
    </section>

    <section>
      <h3>Problem</h3>
      <p>
        In the rapidly changing IT world, where new technologies mushroom,
        certain core competencies—such as adaptability and effective
        communication—remain essential. Mastering these skills not only ensures
        your long-term career success but also makes daily work life more
        satisfying.
      </p>
      <p>
        While technical skills can quickly become outdated, these timeless
        competencies provide a stable foundation, helping you stay adaptable and
        valuable no matter how the industry changes.
      </p>

      <FlipTable />
    </section>

    <section>
      <h3>Motivation Behind the Project</h3>
      <p>
        This project is born from my own experience in the IT field, where I saw
        a growing need to develop non-technical skills alongside technical
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

    <section>
      <h3>Theoretical Foundation</h3>
      <p>
        The <i>Engineering the Intangible</i> project draws on established competency
        models, particularly those by Spencer & Spencer (1993), who define competencies
        as the "underlying characteristics of an individual related to effective
        and superior performance." These characteristics include deeper qualities
        such as motives, traits, and self-concept, which are crucial for long-term
        success, especially in fields where technical skills can quickly become outdated.
      </p>
      <p>
        As statistician George Box famously said, <q
          >All models are wrong, but some are useful.</q
        > This project embraces that idea, offering a framework that, while not perfect,
        is designed to be practical and adaptable across various professional contexts.
      </p>
    </section>

    <section>
      <h4>Selected Bibliography</h4>
      <ul>
        <li>
          Lucia, A. D., & Lepsinger, R. (1999). <cite
            >The art and science of competency models: Pinpointing critical
            success factors in organizations</cite
          >. Jossey-Bass/Pfeiffer.
        </li>
        <li>
          McClelland, D.C. (1987). <cite>Human motivation</cite>. Cambridge:
          Cambridge University Press.
        </li>
        <li>
          Spencer, L. M., & Spencer, S. M. (1993). <cite
            >Competence at work: Models for superior performance</cite
          >. Wiley.
        </li>
      </ul>
    </section>

    <section>
      <h3>Goal of the Project</h3>
      <p>
        The primary goal of this project is to develop a structured, accessible
        approach for tracking and enhancing intangible skills, especially for
        those who lack formal training in psychology or human resources. This
        tool is intended to support self-improvement in both your professional
        and personal life.
      </p>
    </section>

    <section>
      <h3>Target Audience</h3>
      <p>
        While this framework is developed from a software engineer's
        perspective, its focus on timeless competencies makes it relevant to
        anyone looking to grow personally and professionally, no matter where
        they are in their career—whether they're just starting out, stepping
        into leadership, or navigating new challenges in a constantly changing
        world.
      </p>
      <p>
        For junior engineers, the need to acquire extensive technical skills can
        be overwhelming, and the importance of non-technical skills is
        frequently overlooked or underestimated. This tool helps them develop
        these broader skills, which are crucial for comprehensive growth.
        Mid-career professionals transitioning into leadership roles will also
        find this framework valuable, as these intangible competencies become
        increasingly critical.
      </p>
    </section>

    <section>
      <h3>Key Use Cases</h3>
      <ul>
        <li>
          <b>Interview Preparation</b><br />Strengthen key competencies to
          better articulate your skills and experience.
        </li>
        <li>
          <b>Ongoing Personal Development</b><br />Plan your career growth by
          strategically building the soft skills you need.
        </li>
      </ul>
      <p>
        For example, a software engineer preparing for an interview could use
        this tool to identify and enhance relevant non-technical skills, helping
        them develop clear, concise narratives to share during the interview.
      </p>
      <p>
        Similarly, a mid-career software engineer aiming to switch into a
        managerial role might use this framework to strategically plan their
        skill development, making their transition smoother and more effective.
      </p>
    </section>

    <section>
      <h3>Benefits</h3>
      <ul>
        <li>
          <b>Increased Self-Awareness</b><br />
          Understand your strengths and areas for improvement, accelerating your
          career progress and boosting job satisfaction.
        </li>
        <li>
          <b>Objective Measurement</b><br />
          Track your growth over time using a clear, structured approach, helping
          you achieve both short-term and long-term goals.
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

    <FixTable />
  </section>
</article>
