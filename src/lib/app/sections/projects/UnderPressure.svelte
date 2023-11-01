<script>
  import Dt from "$lib/app/components/Dt.svelte";
</script>

<dl>
  <Dt title="Description" />
  <dd>
    <p>
      Display pressure values from last 4 hours for Liberec station and warn if
      change can be dangerous.
    </p>
    <p>
      Data source: <a
        href="https://www.chmi.cz/"
        rel="noopener"
        target="_blank"
      >
        Český hydrometeorologický ústav</a
      >.
    </p>
  </dd>
  <Dt title="GitHub" />
  <dd>
    <p>
      <a
        href="https://github.com/burczan/under-pressure"
        rel="noopener"
        target="_blank"
      >
        <button type="button" class="nes-btn">
          <i class="nes-icon github-square is-small" />
        </button>
      </a>
    </p>
  </dd>
</dl>
