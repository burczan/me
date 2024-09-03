type Level = 1 | 2 | 3 | 4 | 5 | 6;

type Options = {
  insertTocHeading: boolean;
};

export function generateToC(
  startLevel: Level,
  options: Options = {
    insertTocHeading: true,
  },
) {
  const toc = document.getElementById("toc");

  if (!toc) {
    return;
  }

  const range = (start: Level, stop: Level = 6) => {
    return Array.from({ length: stop - start + 1 }, (_, i) => `h${start + i}`);
  };

  const hSelectors = range(startLevel).join(", ");
  const headings: HTMLHeadingElement[] = Array.from(
    document.body.querySelectorAll(`article section :is(${hSelectors})`),
  );

  const ul = document.createElement("ul");
  toc.appendChild(ul);

  headings.forEach((heading) => {
    const id = heading.innerText
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
    heading.setAttribute("id", id);

    const li = ul.appendChild(document.createElement("li"));
    li.setAttribute("class", heading.tagName.toLowerCase());

    const a = li.appendChild(document.createElement("a"));
    a.setAttribute("href", "#" + id);
    a.innerText = heading.innerText;
  });

  if (options.insertTocHeading) {
    const sectionTitle = document.createElement(`h${startLevel}`);
    sectionTitle.innerText = "Contents";
    toc.insertAdjacentElement("afterbegin", sectionTitle);
  }
}
