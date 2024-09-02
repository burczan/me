<script lang="ts">
  import { Projector } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
</script>

<SvelteHead title="Projects" />

<div id="projects">
  <h1><Projector class="icon-h1" /> Projects</h1>

  <div class="box">
    <slot />
  </div>
</div>
