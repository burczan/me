<script lang="ts">
  const happyToLearn: Resume["techstack"]["happyToLearn"] = [
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
    {#each happyToLearn as entry}
      <li>{@html entry}</li>
    {/each}
  </ul>
</figure>
