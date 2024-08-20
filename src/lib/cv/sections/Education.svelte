<script lang="ts">
  import { education, faIconClass } from "$lib/data";
</script>

{#each education as { school, city, degree, field, subfield, dateRange }}
  <div class="border-top">
    <h3>
      <i class="{faIconClass.education} fa-xs" />
      {school}
    </h3>
    <h4 class="iconWidthIndent">
      {degree}, <strong>{field}</strong>{#if subfield}
        ,
        {subfield}
      {/if}
    </h4>
    <h5 class="iconWidthIndent">{dateRange}, {city}</h5>
  </div>
{/each}

<style>
  h3 {
    margin-bottom: 0;
  }
</style>
