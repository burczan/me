<script lang="ts">
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import { base } from "$app/paths";
</script>

<SvelteHead title="404" />

<div>
  <h2 class="red">
    404: The Browser Made a Request, but the Server Threw an Exception.
  </h2>

  <div class="box">
    <p>
      Let's handle this gracefully and return you to where things make sense.
    </p>
    <a href="{base}/">Go home</a>
  </div>
</div>
