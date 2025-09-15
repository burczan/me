<script lang="ts">
  import { Projector } from "@lucide/svelte";
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<SvelteHead title="Projects" />

<div id="projects">
  <h1><Projector class="icon-h1" /> Projects</h1>

  <div class="box">
    {@render children?.()}
  </div>
</div>
