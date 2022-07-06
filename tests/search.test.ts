// 1. Import necessary functions
import { test, expect } from "@playwright/test";

// 2. Group tests together using a describe block
test.describe("IMDB:", () => {
  // 3. Use test block to define executable code necessary to implement the test
  // 4. Here is a '{ page }' that the test above has access to
  test("verify search functionality", async ({ page }) => {
    // 5. Define test data
    const movieName = "Forrest Gump";

    // 6. Go to the imdb page
    await page.goto("https://www.imdb.com/");

    // 7. Enter movie name in the search field
    await page.fill("#suggestion-search", movieName);

    // 8. Assert search result
    expect(
      await page.textContent("data-testid=search-result--const")
    ).toContain(movieName);
    console.log("learn git and git hub4");
    console.log("learn git and git hub5");
    console.log("learn git and git hub6");
    console.log("learn git and git hub7");
  });
});
