<script lang="ts">
  import Container from "$lib/app/components/Container.svelte";
  import Dt from "$lib/app/components/Dt.svelte";
  import List from "$lib/app/components/List.svelte";
  import Subcontainer from "$lib/app/components/Subcontainer.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
</script>

<SvelteHead title="Projects" />

<Container>
  <Subcontainer h2="Toiper">
    <p>
      <a
        href="https://github.com/burczan/toiper"
        rel="noopener"
        target="_blank"
      >
        <button type="button" class="nes-btn">
          <i class="nes-icon github-square is-small" />
          Python CLI version
        </button>
      </a>
      <a
        href="https://github.com/burczan/toiper-react"
        rel="noopener"
        target="_blank"
      >
        <button type="button" class="nes-btn">
          <i class="nes-icon github-square is-small" />
          React GUI version
        </button>
      </a>
    </p>
    <dl>
      <Dt title="Description" />
      <dd>
        <p>
          Compare price of two toilet paper rolls depending on amount of layers
          and leafs.
        </p>
      </dd>
    </dl>
  </Subcontainer>

  <Subcontainer h2="Under Pressure">
    <p>
      <a
        href="https://github.com/burczan/under-pressure"
        rel="noopener"
        target="_blank"
      >
        <button type="button" class="nes-btn">
          <i class="nes-icon github-square is-small" />
        </button>
      </a>
    </p>
    <dl>
      <Dt title="Description" />
      <dd>
        <p>
          Display pressure values from last 4 hours for Liberec station and warn
          if change can be dangerous.
        </p>
        <p>
          Data source: <a
            href="https://www.chmi.cz/"
            rel="noopener"
            target="_blank"
          >
            Český hydrometeorologický ústav
          </a>
          .
        </p>
      </dd>
    </dl>
  </Subcontainer>

  <Subcontainer h2="Anki Scripts">
    <p>
      <button type="button" class="nes-btn is-disabled">
        <i class="nes-icon github-square is-small" />
        Private repository
      </button>
    </p>
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
    </dl>
  </Subcontainer>

  <Subcontainer h2="Intraview">
    <p>
      <button type="button" class="nes-btn is-disabled">
        <i class="nes-icon github-square is-small" />
        Public soon
      </button>
    </p>
    <dl>
      <Dt title="Description" />
      <dd>
        <p>Prepare for behavioral interviews like a pro.</p>
      </dd>
    </dl>
  </Subcontainer>

  <Subcontainer h2="Crocheting Admin Tools">
    <p>
      <button type="button" class="nes-btn is-disabled">
        <i class="nes-icon github-square is-small" />
        Private repository
      </button>
    </p>
    <dl>
      <Dt title="Description" />
      <dd>
        <List>
          <li>Database of crochet patterns.</li>
          <li>Database of yarns.</li>
          <li>
            Various tools and calculators for patterns/projects/yarns
            management.
          </li>
        </List>
      </dd>
    </dl>
  </Subcontainer>
</Container>
