import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const currentTechstack: CurrentTechstack = [
    {
      tech: "AWS",
      favourite: false,
    },
    {
      tech: "Crochet Hook",
      favourite: true,
    },
    {
      tech: "Bash",
      favourite: false,
    },
    {
      tech: "JavaScript",
      favourite: false,
    },
    {
      tech: "Linux",
      favourite: true,
    },
    {
      tech: "Node.js",
      favourite: true,
    },
    {
      tech: "React",
      favourite: false,
    },
    {
      tech: "Svelte",
      favourite: true,
    },
    {
      tech: "TypeScript",
      favourite: true,
    },
  ];

  const futureTechstack: FutureTechnology[] = [
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Rust",
    "Solidity",
    "(but not limited to)",
  ];

  const generallyInterested: GenerallyInterestedIn = [
    "algorithms and data structures",
    "blockchain",
    "devops",
    "distributed systems",
    "electronics",
    "knitting",
    "machine learning",
    "math",
    "neuroscience",
    "resilience engineering",
    "security",
    "theoretical computer science",
    "tunisian crochet",
    "web3",
  ];

  return {
    currentTechstack,
    futureTechstack,
    generallyInterested,
  };
}) satisfies LayoutLoad;
