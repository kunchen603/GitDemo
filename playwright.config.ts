import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 2,
  //Add the 'use' property for all projects(browsers)
  use: {
    headless: false,
    viewport: { width: 1200, height: 750 },
  },
  projects: [
    {
      name: "Chrome Stable",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
    },
    {
      name: "Safari",
      use: {
        browserName: "webkit",
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
      },
    },
  ],
};

export default config;
