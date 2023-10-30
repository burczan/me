import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const experience: Experience[] = [
    {
      role: "Backend Engineer",
      company: "Capbase",
      startDate: "Apr 2021",
      endDate: "Jul 2022",
      description: [
        "Delivering new features and improvements to the product",
        "Developing an API for the internal usage",
        "Debugging",
        "Writing unit and integration tests",
      ],
      skills: ["Node.js", "React", "Linux", "TypeScript", "AWS", "Express.js"],
    },
    {
      role: "Frontend Engineer",
      company: "Beta District",
      startDate: "Dec 2019",
      endDate: "Aug 2020",
      description: [
        "Building reusable components for the newly created frontend",
        "Writing unit and integration tests",
      ],
      skills: [
        "JavaScript",
        "React",
        "GraphQL",
        "TypeScript",
        "Redux",
        "Unit testing",
      ],
    },
    {
      role: "Software Test Engineer",
      company: "Beta District",
      startDate: "Jan 2019",
      endDate: "Nov 2019",
      description: [
        "Remote mentoring of QA specialist, including introduction into programming and test automation",
        "Writing various kinds of automated tests",
        "Developing functionalities in React",
      ],
      skills: [
        "Mentoring",
        "Test automation",
        "JavaScript",
        "React",
        "Ruby",
        "API testing",
      ],
    },
    {
      role: "QA Specialist",
      company: "Beta District",
      startDate: "Feb 2018",
      endDate: "Dec 2018",
      description: [
        "Manual functional and API testing",
        "Working in close cooperation with the developers for the implementation of new functionalities",
        "Testing the production environment after each release",
      ],
      skills: [
        "Burp Suite",
        "Test automation",
        "Manual testing",
        "JavaScript",
        "Ruby",
        "API testing",
      ],
    },
    {
      role: "Junior QA Specialist",
      company: "Beta District",
      startDate: "Apr 2017",
      endDate: "Jan 2018",
      description: [
        "Manual testing",
        "Proposing and implementing more efficient testing procedures",
        "Making suggestions for improvements to projects",
        "Finding and reporting bugs",
      ],
      skills: ["Manual testing", "API testing"],
    },
  ];

  return {
    experience,
  };
}) satisfies LayoutLoad;