import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";

const url = "http://localhost:5173/cv";
const pdfPath = path.resolve("./", "cv_pospieszynska_natalia.pdf");

async function embedMetadata(pdf: Buffer) {
  const pdfDoc = await PDFDocument.load(pdf);
  const author = "Pospieszyńska Natalia";

  pdfDoc.setTitle(`CV | ${author}`, { showInWindowTitleBar: true });
  pdfDoc.setAuthor(author);
  pdfDoc.setKeywords(["cv", "resume", "software engineer"]);

  const pdfBytes = await pdfDoc.save();
  await fs.promises.writeFile(pdfPath, pdfBytes);
}

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.emulateMediaType("screen");

  // overwrite paper-css .sheet class for correct pdf generation
  await page.addStyleTag({
    content: `.sheet {
    box-shadow: none;
    margin: 0;
    padding: 5mm;
  }`,
  });

  const pdf = await page.pdf({
    path: pdfPath,
    format: "A4",
    preferCSSPageSize: true,
    pageRanges: "1-2",
  });

  await embedMetadata(pdf);

  await browser.close();
})();
