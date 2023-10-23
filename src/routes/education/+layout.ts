import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const education: Education[] = [
    {
      school: "Polish Naval Academy of the Heroes of Westerplatte (Gdynia)",
      degree:
        'Postgraduate studies, <span class="nes-text is-success">Cybersecurity</span>',
      dateRange: "2019 - 2020",
    },
    {
      school: "Adam Mickiewicz University (Poznań)",
      degree:
        'Master studies, <span class="nes-text is-success">Philosophy</span>, Social Communication',
      dateRange: "2013 - 2016",
    },
    {
      school: "Post-Secondary School (Poznań)",
      degree:
        'Technician, <span class="nes-text is-success">Sound Engineering</span>',
      dateRange: "2011 - 2013",
    },
    {
      school: "Adam Mickiewicz University (Poznań)",
      degree:
        'Bachelor\'s degree, <span class="nes-text is-success">Educational/Instructional Technology</span>',
      dateRange: "2010 - 2013",
    },
  ];

  return {
    education,
  };
}) satisfies LayoutLoad;
