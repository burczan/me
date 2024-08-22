import { about } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    about,
  };
}) satisfies LayoutLoad;
