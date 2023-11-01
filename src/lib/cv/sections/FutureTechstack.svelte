<script lang="ts">
  const futureTechstack: FutureTechnology[] = [
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Rust",
    "Solidity",
    "(but not limited to)",
  ];
</script>

<figure>
  <figcaption>
    <i class="fa-solid fa-book-open-reader" />
    Happy to learn
  </figcaption>
  <ul class="hideMarkers">
    {#each futureTechstack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</figure>
