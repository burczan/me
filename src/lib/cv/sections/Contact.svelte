<script lang="ts">
  import { about, faIconClass } from "$lib/data";

  const { location } = about;
  const { github, linkedin, web } = about.contact;
</script>

<section id="contact">
  <h2>
    <i class={faIconClass.contact} /> Contact
  </h2>

  <ul class="hideMarkers">
    <li>
      <a href={web.href} rel="noopener" target="_blank">
        <i class={web.faIconClass} />
        {web.displayValue}
      </a>
    </li>
    <li>
      <a href={linkedin.href} rel="noopener" target="_blank">
        <i class={linkedin.faIconClass} />
        {linkedin.displayValue}
      </a>
    </li>
    <li>
      <a href={github.href} rel="noopener" target="_blank">
        <i class={github.faIconClass} />
        {github.displayValue}
      </a>
    </li>
    <li>
      <a href={location.mapUrl} rel="noopener" target="_blank">
        <i class={location.icon} />
        {location.city},
        <strong>{location.country}</strong>
      </a>
    </li>
  </ul>
</section>
