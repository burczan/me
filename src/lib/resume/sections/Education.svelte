<script lang="ts">
  import { education, faIconClass } from "$lib/data";
</script>

<section id="education">
  <h2>
    <i class={faIconClass.education} /> Education
  </h2>

  {#each education as { school, city, country, degree, field, subfield, dateRange, website }}
    <div class="entry">
      <div class="head">
        {#if website}
          <a href={website} title={school} rel="noopener" target="_blank"
            >{school}</a
          >
        {:else}
          {school}
        {/if}
        ({city}, {country})
      </div>

      <div>
        {degree},
        <strong>{field}</strong>{#if subfield}, {subfield}
        {/if}
      </div>

      <div>
        {dateRange}
      </div>
    </div>
  {/each}
</section>
