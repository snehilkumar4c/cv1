// Builds assets/Snehil_Kumar_Resume.pdf from resume.html.
// Usage: node resume-src/build.js   (needs the `playwright` package and Chromium)
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'resume.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(__dirname, '..', 'assets', 'Snehil_Kumar_Resume.pdf'), preferCSSPageSize: true, printBackground: true });
  await browser.close();
})();
