import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const education: APP_Education[] = [
    {
      school: "Polish Naval Academy of the Heroes of Westerplatte",
      city: "Gdynia",
      field: "Cybersecurity",
      degree: "Postgraduate studies",
      dateRange: "2019 - 2020",
    },
    {
      school: "Adam Mickiewicz University",
      city: "Poznań",
      field: "Philosophy",
      subfield: "Social Communication",
      degree: "Master studies",
      dateRange: "2013 - 2016",
    },
    {
      school: "Post-Secondary School",
      city: "Poznań",
      field: "Sound Engineering",
      degree: "Technician",
      dateRange: "2011 - 2013",
    },
    {
      school: "Adam Mickiewicz University",
      city: "Poznań",
      field: "Instructional Technology",
      degree: "Bachelor's degree",
      dateRange: "2010 - 2013",
    },
  ];

  return {
    education,
  };
}) satisfies LayoutLoad;
