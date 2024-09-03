<script lang="ts">
  import { experience, faIconClass } from "$lib/data";

  // const expWithoutLLidero = experience.filter(
  //   (exp) => exp.company !== "LLidero",
  // );
</script>

<section id="work-experience">
  <h2>
    <i class={faIconClass.experience} /> Experience
  </h2>

  {#each experience as { role, company, startDate, endDate, descriptionShortened }}
    <div class="entry">
      <div class="head">
        <strong>{role}</strong>
        @{company} ({startDate} &ndash; {endDate})
      </div>

      <ul>
        {#each descriptionShortened as entry}
          <li>{entry}</li>
        {/each}
      </ul>
    </div>
  {/each}
</section>

<style>
  ul {
    margin-bottom: 1rem;
    margin-inline-start: 2.5rem;
  }
</style>
