<script lang="ts">
  import { projects, faIconClass } from "$lib/data";

  const ei = projects[0];
</script>

<section id="projects">
  <h2>
    <i class={faIconClass.projects} /> Projects
  </h2>

  <div class="entry">
    <div class="head">
      <strong>
        <a
          href="https://burczan.github.io/me/projects/{ei.slug}/"
          title={ei.shortTitle}
          rel="noopener"
          target="_blank"
        >
          {ei.shortTitle}
          <i class="{faIconClass.externalLink} fa-sm" />
        </a>
      </strong>
    </div>

    <p>
      I am developing a tool aimed at bridging the gap between rapidly evolving
      technical skills and essential human competencies, such as effective
      communication and adaptability.
    </p>
    <p>
      Leveraging my understanding of software engineering as well as my personal
      experience in the tech industry, I am designing a solution that provides
      an intuitive and user-friendly interface, specifically tailored to the
      analytical mindset of technical professionals.
    </p>
    <p>
      This project is helping individuals grow both professionally and
      personally in a constantly changing world, aligning with industry demands
      for well-rounded technical experts.
    </p>
  </div>
</section>
