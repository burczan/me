<script lang="ts">
  import { experience, faIconClass } from "$lib/data";

  const expWithoutLLidero = experience.filter(
    (exp) => exp.company !== "LLidero",
  );
</script>

<div id="work-experience">
  {#each expWithoutLLidero as { role, company, startDate, endDate, descriptionShortened }}
    <div class="border-top">
      <span class="role">
        <i class={faIconClass.experience} />
        <strong>{role}</strong>
        @{company} ({startDate} &ndash; {endDate})
      </span>

      <ul>
        {#each descriptionShortened as entry}
          <li>{entry}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  .role {
    font-size: larger;
  }

  ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-inline-start: 3.1rem;
    list-style-position: outside;
    list-style-type: disc;
  }
</style>
