<script lang="ts">
  import { about, faIconClass } from "$lib/data";

  const { location } = about;
  const { github, linkedin, web } = about.contact;
</script>

<section id="contact">
  <h2>
    <i class={faIconClass.contact}></i> Contact
  </h2>

  <ul class="hideMarkers">
    <li>
      <a href={web.href} rel="noopener" target="_blank">
        <i class={web.faIconClass}></i>
        {web.displayValue}
      </a>
    </li>
    <li>
      <a href={linkedin.href} rel="noopener" target="_blank">
        <i class={linkedin.faIconClass}></i>
        {linkedin.displayValue}
      </a>
    </li>
    <li>
      <a href={github.href} rel="noopener" target="_blank">
        <i class={github.faIconClass}></i>
        {github.displayValue}
      </a>
    </li>
    <li>
      <a href={location.mapUrl} rel="noopener" target="_blank">
        <i class={location.icon}></i>
        {location.city},
        <strong>{location.country}</strong>
      </a>
    </li>
  </ul>
</section>
