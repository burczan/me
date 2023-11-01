<script lang="ts">
  const education: Education = [
    {
      school: "Polish Naval Academy",
      city: "Gdynia",
      field: "Cybersecurity",
      degree: "Postgraduate studies",
      dateRange: "2019 - 2020",
    },
    {
      school: "Adam Mickiewicz University",
      city: "Poznań",
      field: "Philosophy",
      subfield: "Social Communication",
      degree: "Master studies",
      dateRange: "2013 - 2016",
    },
    {
      school: "Post-Secondary School",
      city: "Poznań",
      field: "Sound Engineering",
      degree: "Technician",
      dateRange: "2011 - 2013",
    },
    {
      school: "Adam Mickiewicz University",
      city: "Poznań",
      field: "Instructional Technology",
      degree: "Bachelor's degree",
      dateRange: "2010 - 2013",
    },
  ];
</script>

{#each education as { school, city, degree, field, subfield, dateRange }}
  <div class="border-top">
    <h3>
      <i class="fa-solid fa-graduation-cap fa-xs" />
      {school} ({city})
    </h3>
    <h4 class="iconWidthIndent">
      {degree}, <strong>{field}</strong>{#if subfield}
        ,
        {subfield}
      {/if}
    </h4>
    <h5 class="iconWidthIndent">{dateRange}</h5>
  </div>
{/each}

<style>
  h3 {
    margin-bottom: 0;
  }
</style>
