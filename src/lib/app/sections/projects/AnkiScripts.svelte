<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import type { ProjectLegacy } from "$lib/types";

  export let project: ProjectLegacy;
</script>

<List caption="Status">
  <li>{project.status}</li>
</List>

<p>
  Custom scripts (TypeScript) and styling (Sass) for <a
    href="https://apps.ankiweb.net/"
    rel="noopener"
    target="_blank"
  >
    Anki
  </a>
  flashcards.
</p>

<p>CLI tools (Node/TypeScript) for</p>

<List>
  <li>
    generating <a href="https://plantuml.com/" rel="noopener" target="_blank">
      PlantUML
    </a>
    diagrams.
  </li>
  <li>diagrams' storage and retrieval.</li>
  <li>
    HTML &lt;--&gt; <a
      href="https://prismjs.com/"
      rel="noopener"
      target="_blank"
    >
      Prism
    </a>
    conversion.
  </li>
</List>

<p>
  <button type="button" class="nes-btn is-disabled">
    <i class="nes-icon github-square is-small" />
    Private repository
  </button>
</p>
