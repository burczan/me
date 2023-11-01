import { about } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const navbarItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Soft skills",
      href: "/soft_skills",
    },
    {
      name: "Tech stack",
      href: "/techstack",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Education",
      href: "/education",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  return {
    navbarItems,
    name: about.name,
  };
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = "always";
