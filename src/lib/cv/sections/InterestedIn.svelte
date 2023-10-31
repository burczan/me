<script lang="ts">
  const generallyInterested: Resume["techstack"]["generallyInterested"] = [
    "Algorithms and Data Structures",
    "Blockchain",
    "Crocheting",
    "DevOps",
    "Distributed Systems",
    "Electronics",
    "Knitting",
    "Machine Learning",
    "Math",
    "Neuroscience",
    "Resilience Engineering",
    "Security",
    "Theoretical Computer Science",
    "Tunisian Crochet",
    "Web3",
  ];
</script>

<figure>
  <figcaption>
    <i class="fa-solid fa-brain" />
    Generally interested in
  </figcaption>
  <ul class="hideMarkers">
    {#each generallyInterested as entry}
      <li>{entry}</li>
    {/each}
  </ul>
</figure>
