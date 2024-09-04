import {
  generalInterests,
  projects,
  softSkills,
  spokenLanguages,
  technologies,
} from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    generalInterests,
    projects,
    softSkills,
    spokenLanguages,
    technologies,
  };
}) satisfies LayoutLoad;
