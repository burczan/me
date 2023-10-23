import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const languages: Language[] = [
    {
      language: "Polish",
      level: "Native proficiency",
    },
    {
      language: "English",
      level: "Full professional proficiency",
    },
    {
      language: "Czech",
      level: "Limited working proficiency",
    },
    {
      language: "Spanish",
      level: "Elementary proficiency",
    },
  ];

  return {
    languages,
  };
}) satisfies LayoutLoad;
