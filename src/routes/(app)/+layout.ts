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
  };
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = "always";
