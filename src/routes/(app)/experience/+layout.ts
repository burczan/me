import { experience } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    experience,
  };
}) satisfies LayoutLoad;
