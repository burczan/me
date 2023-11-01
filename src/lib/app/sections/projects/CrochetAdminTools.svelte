<script>
  import Dt from "$lib/app/components/Dt.svelte";
  import List from "$lib/app/components/List.svelte";
</script>

<dl>
  <Dt title="Description" />
  <dd>
    <List>
      <li>Database of crochet patterns.</li>
      <li>Database of yarns.</li>
      <li>
        Various tools and calculators for patterns/projects/yarns management.
      </li>
    </List>
  </dd>
  <Dt title="GitHub" />
  <dd>
    <p>
      <button type="button" class="nes-btn is-disabled">
        <i class="nes-icon github-square is-small" />
        Private repository
      </button>
    </p>
  </dd>
</dl>
