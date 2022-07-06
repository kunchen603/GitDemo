import { test, expect } from "@playwright/test";
//test("Interact with shadow ROM", async ({ page }) => {
//await page.goto("https://letcode.in/shadow");
//await page.fill("#fname", "koushik");
// await page.waitForTimeout(3000);
//});

test("Interact with Praxis Connect", async ({ page }) => {
  //await page.goto("https://206.12.12.51:44315/");

  await page.goto("https://coordinator.demo.praxisconnect.net/");
  await page.waitForTimeout(3000);
  await page.fill("#email", "kun@test");
  await page.fill("#password", "Complex123!");
  await page.waitForTimeout(3000);
  await page.click(".button");
  await page.waitForTimeout(3000);
});

test("Interact with GRP", async ({ page }) => {
  //await page.goto("https://206.12.12.51:44315/");

  //await page.goto("https://secure.rhigrp.net/");
  await page.goto("https://demo.rhigrp.net/");
  //await page.waitForTimeout(3000);
  await page.fill("#UserName", "kchen");
  await page.fill("#Password", "Complex123!");
  //await page.waitForTimeout(3000);
  await page.click("#LogOnButton");
  await page.waitForTimeout(10000);
  console.log("learn git and git hub");
  console.log("learn git and git hub");
});
