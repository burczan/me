import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";

const url = "http://localhost:5173/resume";
const pdfPath = path.resolve("./", "cv_pospieszynska_natalia.pdf");

async function embedMetadata(pdf: Uint8Array) {
  const pdfDoc = await PDFDocument.load(pdf);
  const author = "Pospieszyńska Natalia";

  pdfDoc.setTitle(`CV | ${author}`, { showInWindowTitleBar: true });
  pdfDoc.setAuthor(author);
  pdfDoc.setKeywords(["cv", "resume", "software engineer"]);

  const pdfBytes = await pdfDoc.save();
  await fs.promises.writeFile(pdfPath, pdfBytes);
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.emulateMediaType("print");

  const client = await page.createCDPSession();
  await client.send("Page.enable");
  // Browser font size setting
  // 9 - very small
  // 12 - small
  // 16 - medium (recommended)
  await client.send("Page.setFontSizes", { fontSizes: { standard: 16 } });

  const pdf = await page.pdf({
    path: pdfPath,
    format: "A4",
    preferCSSPageSize: true,
    pageRanges: "1-2",
  });

  await embedMetadata(pdf);

  await browser.close();
})();
