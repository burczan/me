<script lang="ts">
  import List from "$lib/app/components/List.svelte";
</script>

<List caption="Status" showMarkers={false}>
  <li>Maintained/active development.</li>
</List>

<List>
  <li>Database of crochet patterns.</li>
  <li>Database of yarns.</li>
  <li>Various tools and calculators for patterns/projects/yarns management.</li>
</List>

<p>
  <button type="button" class="nes-btn is-disabled">
    <i class="nes-icon github-square is-small" />
    Private repository
  </button>
</p>
