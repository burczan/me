<script lang="ts">
  const education: Resume["education"] = [
    {
      school: "Polish Naval Academy (Gdynia)",
      degree: "Postgraduate studies, <strong>Cybersecurity</strong>",
      dateRange: "2019 - 2020",
    },
    {
      school: "Adam Mickiewicz University (Poznań)",
      degree:
        "Master studies, <strong>Philosophy</strong>, Social Communication",
      dateRange: "2013 - 2016",
    },
    {
      school: "Post-Secondary School (Poznań)",
      degree: "Technician, <strong>Sound Engineering</strong>",
      dateRange: "2011 - 2013",
    },
    {
      school: "Adam Mickiewicz University (Poznań)",
      degree:
        "Bachelor's degree, <strong>Educational/Instructional Technology</strong>",
      dateRange: "2010 - 2013",
    },
  ];
</script>

{#each education as { school, degree, dateRange }}
  <div class="border-top">
    <h3>
      <i class="fa-solid fa-graduation-cap fa-xs" />
      {school}
    </h3>
    <h4 class="iconWidthIndent">{@html degree}</h4>
    <h5 class="iconWidthIndent">{dateRange}</h5>
  </div>
{/each}

<style>
  h3 {
    margin-bottom: 0;
  }
</style>
