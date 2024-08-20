import { currentTechstack, futureTechstack, generalInterests } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    currentTechstack,
    futureTechstack,
    generalInterests,
  };
}) satisfies LayoutLoad;
