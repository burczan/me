import { spokenLanguages, softSkills, technologies } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    spokenLanguages,
    softSkills,
    technologies,
  };
}) satisfies LayoutLoad;
