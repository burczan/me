<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import List from "$lib/components/List.svelte";
  import SvelteHead from "$lib/components/SvelteHead.svelte";

  const techstack = [
    "AWS",
    'Crochet Hook <i class="nes-icon is-small heart" />',
    "JavaScript",
    'Linux <i class="nes-icon is-small heart" />',
    'Node.js <i class="nes-icon is-small heart" />',
    "React",
    'Svelte <i class="nes-icon is-small heart" />',
    'TypeScript <i class="nes-icon is-small heart" />',
  ];

  const happyToLearn = [
    "C",
    "C++",
    "C#",
    "Java",
    "Kotlin",
    "Python",
    "Rust",
    "Solidity",
    "(but not limited to)",
  ];

  const generallyInterested = [
    "algorithms and data structures",
    "blockchain",
    "devops",
    "distributed systems",
    "electronics",
    "knitting",
    "machine learning",
    "math",
    "neuroscience",
    "resilience engineering",
    "security",
    "theoretical computer science",
    "tunisian crochet",
    "web3",
  ];
</script>

<SvelteHead title="Tech stack" />

<Container>
  <div class="columns">
    <div class="left">
      <List caption="Current tech stack">
        {#each techstack as entry}
          <li>{@html entry}</li>
        {/each}
      </List>
    </div>

    <div class="central">
      <List caption="Happy to learn">
        {#each happyToLearn as entry}
          <li>{entry}</li>
        {/each}
      </List>
    </div>

    <div class="right">
      <List caption="Generally interested in">
        {#each generallyInterested as entry}
          <li style:text-transform="capitalize">{entry}</li>
        {/each}
      </List>
    </div>
  </div>
</Container>

<style>
  .columns {
    display: grid;
    grid-template-areas: "left central right";
    grid-template-columns: 0.5fr 0.5fr 1fr;
  }

  .left {
    grid-area: left;
  }

  .central {
    grid-area: central;
  }

  .right {
    grid-area: right;
  }
</style>
