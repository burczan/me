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
      Developing a tool designed to bridge the gap between rapidly evolving
      technical skills and essential human competencies like effective
      communication and adaptability. Motivated by personal experiences in the
      tech industry, this project focuses on providing a straightforward,
      intuitive approach tailored to the analytical mindset of technical
      professionals.
    </p>
  </div>
</section>
