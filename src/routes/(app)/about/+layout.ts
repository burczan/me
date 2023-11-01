import { about, spokenLanguages } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    about,
    spokenLanguages,
  };
}) satisfies LayoutLoad;
