const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Go to login page
  await page.goto('https://example.com/login');

  // Fill login form
  await page.fill('input[name="username"]', 'your_username');
  await page.fill('input[name="password"]', 'your_password');

  // Click login button
  await page.click('button[type="submit"]');

  // Wait for navigation or dashboard element
  await page.waitForLoadState('networkidle');

  // Optional: verify login success
  const successElement = await page.locator('text=Welcome');
  if (await successElement.isVisible()) {
    console.log('Login successful!');
  } else {
    console.log('Login failed!');
  }

  // Close browser
  await browser.close();
})();

My code
git changes 
# This is my commentgit
