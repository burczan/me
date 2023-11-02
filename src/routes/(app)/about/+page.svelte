<script lang="ts">
  import List from "$lib/app/components/List.svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";

  export let data;
</script>

<SvelteHead title="About" />

<div class="columns">
  <div class="left">
    <dt><span class="nes-text is-primary">Role</span></dt>
    <dd>
      <p>{data.about.role}</p>
    </dd>

    <dt><span class="nes-text is-primary">Location</span></dt>
    <dd>
      <p>
        {data.about.location.city}, {data.about.location.region},
        <span class="nes-text is-success">{data.about.location.country}</span>
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
    <dl />
  </div>

  <div class="right">
    <dl>
      <dt><span class="nes-text is-primary">Spoken languages</span></dt>
      <dd>
        <List>
          {#each data.spokenLanguages as { language, level }}
            <li>
              <span class="nes-text is-success">{language}</span> ({level})
            </li>
          {/each}
        </List>
      </dd>

      <dt><span class="nes-text is-primary">Contact</span></dt>
      <dd>
        <List>
          <li>
            <a
              href={data.about.contact.linkedin.href}
              rel="noopener"
              target="_blank"
            >
              LinkedIn <i class="nes-icon linkedin is-small" />
            </a>
          </li>
          <li>
            <a
              href={data.about.contact.github.href}
              rel="noopener"
              target="_blank"
            >
              GitHub <i class="nes-icon github-square is-small" />
            </a>
          </li>
        </List>
      </dd>
    </dl>
  </div>
</div>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 0.5fr 0.5fr;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
</style>
