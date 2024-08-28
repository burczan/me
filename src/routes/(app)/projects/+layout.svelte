<script lang="ts">
  import { Projector } from "lucide-svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
</script>

<SvelteHead title="Projects" />

<div id="projects">
  <h2 class="orange"><Projector class="icon-h2" /> Projects</h2>

  <div class="box">
    <slot />
  </div>
</div>
