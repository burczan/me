<script lang="ts">
  const languages: SpokenLanguages = [
    {
      language: "Polish",
      level: "Native proficiency",
    },
    {
      language: "English",
      level: "Full professional proficiency",
    },
    {
      language: "Czech",
      level: "Limited working proficiency",
    },
  ];
</script>

<figure>
  <figcaption>
    <i class="fa-solid fa-language" />
    Spoken languages
  </figcaption>
  <ul class="hideMarkers">
    {#each languages as { language, level }}
      <li>
        <strong>{language}</strong>
        <br />
        ({level})
      </li>
    {/each}
  </ul>
</figure>
