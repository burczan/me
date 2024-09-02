export function generateToC() {
  const toc = document.getElementById("toc");

  if (!toc) {
    return;
  }

  const headings: HTMLHeadingElement[] = Array.from(
    document.body.querySelectorAll("article section :is(h3, h4, h5, h6)"),
  );

  const ul = document.createElement("ul");
  toc.appendChild(ul);

  headings.forEach((heading) => {
    const id = heading.innerText.replace(/\s+/g, "-").toLowerCase();
    heading.setAttribute("id", id);

    const li = ul.appendChild(document.createElement("li"));
    li.setAttribute("class", heading.tagName.toLowerCase());

    const a = li.appendChild(document.createElement("a"));
    a.setAttribute("href", "#" + id);
    a.innerText = heading.innerText;
  });

  const sectionTitle = document.createElement("h3");
  sectionTitle.innerText = "Contents";
  toc.insertAdjacentElement("afterbegin", sectionTitle);
}
