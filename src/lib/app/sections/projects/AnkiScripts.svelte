<script>
  import Dt from "$lib/app/components/Dt.svelte";
  import List from "$lib/app/components/List.svelte";
</script>

<dl>
  <Dt title="Description" />
  <dd>
    <List>
      <li>
        Custom scripts (TypeScript) and styling (Sass) for <a
          href="https://apps.ankiweb.net/"
          rel="noopener"
          target="_blank"
        >
          Anki
        </a>
        flashcards.
      </li>
      <li>CLI tools (Node/TypeScript) for</li>
      <List>
        <li>
          generating <a
            href="https://plantuml.com/"
            rel="noopener"
            target="_blank"
          >
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
    </List>
  </dd>
  <Dt title="GitHub" />
  <dd>
    <p>
      <button type="button" class="nes-btn is-disabled">
        <i class="nes-icon github-square is-small" />
        Private repository
      </button>
    </p>
  </dd>
</dl>
