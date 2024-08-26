import { about, softSkills, spokenLanguages, technologies } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    about,
    softSkills,
    spokenLanguages,
    technologies,
  };
}) satisfies LayoutLoad;
