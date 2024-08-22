<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;

  const sections = ["Craftsmanship", "Future Career Goals", "Contact"];

  const setActiveTab = (tabId: number) => () => (activeTabId = tabId);

  let activeTabId = 0;
</script>

<SvelteHead title="Summary" />

<div class="tabs-grid-container">
  <div class="tabs">
    {#each sections as _section, id}
      <p>
        <button
          id={id.toString()}
          type="button"
          class="nes-btn"
          class:is-primary={id === activeTabId}
          on:click={setActiveTab(id)}
        >
          {sections[id]}
        </button>
      </p>
    {/each}
  </div>

  <div class="content nes-container is-rounded is-dark">
    {#if activeTabId === 0}
      <div>
        <h2 class="nes-text is-primary">My code compiles, therefore I am</h2>
        <p>
          I approach software development with a strong focus on <span
            class="nes-text is-success">quality</span
          >
          and <span class="nes-text is-success">craftsmanship</span>.
        </p>
        <p>
          I take pride in writing <span class="nes-text is-success">clean</span>
          and
          <span class="nes-text is-success">maintainable</span> code, always striving
          to choose the right tools to deliver optimal solutions.
        </p>
        <p>
          In my free time, I enjoy <span class="nes-text is-success"
            >crocheting</span
          >, which reflects my appreciation for craftsmanship, and helps me
          maintain a healthy work-life balance.
        </p>
      </div>
    {/if}

    {#if activeTabId === 1}
      <div>
        <h2 class="nes-text is-primary">Blocks, Chains, and Data Pains</h2>
        <p>
          I have also a growing interest in <span class="nes-text is-success"
            >blockchain</span
          >,
          <span class="nes-text is-success">data science</span>, and
          <span class="nes-text is-success">artificial intelligence</span>.
        </p>
        <p>
          While my academic background is not in STEM, my commitment to <span
            class="nes-text is-success">continuous learning</span
          >, driven by a
          <span class="nes-text is-success">growth mindset</span>, and followed
          by fascination for <span class="nes-text is-success">algorithms</span>
          and
          <span class="nes-text is-success">data structures</span>,
          <span class="nes-text is-success">mathematics</span>, and theoretical
          <span class="nes-text is-success">computer science</span> drive me to explore
          these fields.
        </p>
      </div>
    {/if}

    {#if activeTabId === 2}
      <div>
        <h2 class="nes-text is-primary">Contact</h2>
        <p>
          <a
            href={data.about.contact.linkedin.href}
            rel="noopener"
            target="_blank"
          >
            <i class="nes-icon linkedin is-small" /> LinkedIn
          </a>
        </p>
        <p>
          <a
            href={data.about.contact.github.href}
            rel="noopener"
            target="_blank"
          >
            <i class="nes-icon github-square is-small" /> GitHub
          </a>
        </p>

        <dt><span class="nes-text is-primary">Location</span></dt>
        <dd>
          <p>
            {data.about.location.city}, {data.about.location.region},
            <span class="nes-text is-success"
              >{data.about.location.country}</span
            >
          </p>
          <List showMarkers={false}>
            <li>
              <i class="nes-icon check nes-text is-success is-small" />
              Visiting office from time to time
            </li>
            <li>
              <i class="nes-icon comment nes-text is-warning is-small" />
              Visiting office once a month
            </li>
            <li>
              <i class="nes-icon times nes-text is-error is-small" />
              Visiting office once a week
            </li>
            <li>
              <i class="nes-icon times nes-text is-error is-small" />
              Relocation to &lt;city&gt;
            </li>
          </List>
        </dd>
      </div>
    {/if}
  </div>
</div>

<style>
  h2 {
    margin-bottom: 1em;
  }

  .tabs-grid-container {
    display: grid;
    grid-template-areas: "tabs content";
    grid-template-columns: 0.5fr 1fr;
  }

  .tabs-grid-container .tabs {
    grid-area: tabs;
  }

  .tabs-grid-container .content {
    grid-area: content;
  }
</style>
