<script lang="ts">
  import { experience, faIconClass } from "$lib/data";
</script>

{#each experience as { role, company, startDate, endDate, description }}
  <div class="border-top">
    <h3>
      <i class="{faIconClass.experience} fa-xs" />
      <strong>{role}</strong>
      @
      {company}
    </h3>

    <h5 class="iconWidthIndent">{startDate} - {endDate}</h5>

    <ul>
      {#each description as entry}
        <li><span>{entry}</span></li>
      {/each}
    </ul>
  </div>
{/each}

<style>
  h3 {
    margin-bottom: 0;
  }
</style>
