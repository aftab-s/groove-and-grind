import { mkdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = process.env.SHOWCASE_URL || 'http://127.0.0.1:4173/';
const outputDir = path.resolve('public/videos');
const tempVideoDir = path.resolve('.recordings/tmp');
const finalVideoName = process.env.SHOWCASE_FILE || 'groove-grind-showcase-1080p.webm';
const finalVideoPath = path.resolve(outputDir, finalVideoName);
const viewport = { width: 1920, height: 1080 };

const pause = (page, ms) => page.waitForTimeout(ms);

const clickIfVisible = async (page, selector, waitAfter = 1800) => {
  const target = page.locator(selector).first();
  if (await target.count()) {
    await target.click({ timeout: 3000 });
    await pause(page, waitAfter);
  }
};

const scrollToSelector = async (page, selector, duration = 2.4, hold = 900) => {
  await page.evaluate(({ targetSelector, scrollDuration }) => {
    const target = document.querySelector(targetSelector);
    const y = target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - 80) : 0;

    if (window.__lenis && typeof window.__lenis.scrollTo === 'function') {
      window.__lenis.scrollTo(y, { duration: scrollDuration });
      return;
    }

    window.scrollTo({ top: y, behavior: 'smooth' });
  }, { targetSelector: selector, scrollDuration: duration });

  await pause(page, (duration + 0.8) * 1000 + hold);
};

await mkdir(outputDir, { recursive: true });
await mkdir(tempVideoDir, { recursive: true });
await rm(finalVideoPath, { force: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport,
  recordVideo: {
    dir: tempVideoDir,
    size: viewport,
  },
});

const page = await context.newPage();
const video = page.video();

await page.goto(baseUrl, { waitUntil: 'networkidle' });
await pause(page, 2600);

// Hero details
await page.hover('.hero-cta-primary');
await pause(page, 900);
await page.hover('.hero-cta-secondary');
await pause(page, 1000);

// Smooth guided journey through sections
await scrollToSelector(page, '#products', 2.8, 1100);
await scrollToSelector(page, '#experience', 2.6, 1000);

// Showcase draggable lookbook rail
const rail = page.locator('.experience-track');
if (await rail.count()) {
  const box = await rail.boundingBox();
  if (box) {
    const y = box.y + box.height * 0.45;
    const startX = box.x + box.width * 0.8;
    const endX = box.x + box.width * 0.22;

    await page.mouse.move(startX, y);
    await page.mouse.down();
    await page.mouse.move(endX, y, { steps: 54 });
    await page.mouse.up();
    await pause(page, 1800);
  }
}

// Club section interaction
await scrollToSelector(page, '#record-club', 2.6, 1200);
await clickIfVisible(page, '#sub-name', 300);
await page.fill('#sub-name', 'Aanya');
await pause(page, 300);
await page.fill('#sub-email', 'aanya@example.com');
await pause(page, 450);
await clickIfVisible(page, '.sub-btn', 1800);

// Footer reveal
await scrollToSelector(page, 'footer', 2.2, 1100);

// Scroll-to-top button functionality
await clickIfVisible(page, '.scroll-top-btn', 3200);
await pause(page, 1400);

await page.close();
const recordedPath = await video.path();
await context.close();
await browser.close();

await rename(recordedPath, finalVideoPath);
await rm(path.resolve('.recordings'), { recursive: true, force: true });

console.log(`Saved showcase video: ${finalVideoPath}`);
