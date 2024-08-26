import { about } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const navbarItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About me",
      href: "/about/",
    },
    {
      name: "Experience",
      href: "/experience/",
    },
    {
      name: "Education",
      href: "/education/",
    },
    {
      name: "Contact",
      href: "/contact/",
    },
  ];

  return {
    navbarItems,
    about,
  };
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = "always";
