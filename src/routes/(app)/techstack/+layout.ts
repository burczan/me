import {
  currentTechstack,
  futureTechstack,
  generallyInterested,
} from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    currentTechstack,
    futureTechstack,
    generallyInterested,
  };
}) satisfies LayoutLoad;
