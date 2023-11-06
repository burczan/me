<script lang="ts">
  import List from "$lib/app/components/List.svelte";
</script>

<List caption="Status" showMarkers={false}>
  <li>
    Current versions deprecated. Working on improved comparison algorithm.
  </li>
</List>

<p>
  Compare price of two toilet paper rolls depending on amount of layers and
  leafs.
</p>

<p>
  <a href="https://github.com/burczan/toiper" rel="noopener" target="_blank">
    <button type="button" class="nes-btn">
      <i class="nes-icon github-square is-small" />
      Python CLI version
    </button>
  </a>
  <a
    href="https://github.com/burczan/toiper-react"
    rel="noopener"
    target="_blank"
  >
    <button type="button" class="nes-btn">
      <i class="nes-icon github-square is-small" />
      React GUI version
    </button>
  </a>
</p>
