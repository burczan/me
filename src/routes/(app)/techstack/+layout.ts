import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const currentTechstack = [
    "AWS",
    'Crochet Hook <i class="nes-icon is-small heart" />',
    "JavaScript",
    'Linux <i class="nes-icon is-small heart" />',
    'Node.js <i class="nes-icon is-small heart" />',
    "React",
    'Svelte <i class="nes-icon is-small heart" />',
    'TypeScript <i class="nes-icon is-small heart" />',
  ];

  const happyToLearn = [
    "C",
    "C++",
    "C#",
    "Java",
    "Kotlin",
    "Python",
    "Rust",
    "Solidity",
    "(but not limited to)",
  ];

  const generallyInterested = [
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
    happyToLearn,
    generallyInterested,
  };
}) satisfies LayoutLoad;
