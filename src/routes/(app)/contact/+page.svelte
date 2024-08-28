<script lang="ts">
  import SvelteHead from "$lib/app/components/SvelteHead.svelte";
  import {
    Check,
    Contact,
    Github,
    Linkedin,
    MapPin,
    MessageCircleQuestion,
    X,
  } from "lucide-svelte";

  export let data;

  const { contact, location } = data.about;
</script>

<SvelteHead title="Contact" />

<div id="contact">
  <h2 class="orange"><Contact class="icon-h2" /> Contact</h2>

  <div class="box center">
    <p>
      <Linkedin />
      <a href={contact.linkedin.href} rel="noopener" target="_blank">
        LinkedIn
      </a>
    </p>

    <p>
      <Github />
      <a href={contact.github.href} rel="noopener" target="_blank"> GitHub </a>
    </p>

    <p>
      <MapPin />
      <a href={location.mapUrl}>{location.city}, {location.country}</a>
    </p>

    <ul class="hide-bullets">
      <li>
        <Check color={"var(--green)"} /> Visiting office from time to time
      </li>
      <li>
        <MessageCircleQuestion color={"var(--orange)"} /> Visiting office once a
        month
      </li>
      <li><X color={"var(--red)"} /> Visiting office once a week</li>
      <li><X color={"var(--red)"} /> Relocation to &lt;city&gt;</li>
    </ul>
  </div>
</div>

<style>
  div.center {
    max-width: fit-content;
    margin: auto;
  }

  ul.hide-bullets li {
    list-style: none;
  }
</style>
