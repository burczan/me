<script lang="ts">
  import { education, faIconClass } from "$lib/data";
</script>

<div id="education">
  {#each education as { school, city, country, degree, field, subfield, dateRange, website }}
    <div class="border-top">
      <div class="school">
        <i class={faIconClass.education} />
        {#if website}
          <a href={website} title={school} rel="noopener" target="_blank"
            >{school}</a
          >
        {:else}
          {school}
        {/if}
        ({city}, {country})
      </div>

      <div class="degree">
        <i class="{faIconClass.education} fa-blank" />
        {degree},
        <strong>{field}</strong>{#if subfield}, {subfield}
        {/if}
      </div>

      <div class="date-range">
        <i class="{faIconClass.education} fa-blank" />
        {dateRange}
      </div>
    </div>
  {/each}
</div>

<style>
  .fa-blank {
    visibility: hidden !important;
    font-size: large;
  }

  .school {
    font-size: large;
  }

  .degree {
    font-size: medium;
  }

  .date-range {
    font-size: medium;
  }
</style>
