# Playwright Automation

A comprehensive Playwright test automation project for learning and demonstrating end-to-end testing capabilities with modern web applications.

## 🚀 Features

- **Cross-browser testing**: Support for Chromium, Firefox, and WebKit browsers
- **Parallel test execution**: Optimized for faster test runs
- **HTML reporting**: Detailed test reports with screenshots and traces
- **CI/CD ready**: Configured for continuous integration environments
- **Comprehensive test suite**: Examples covering various testing scenarios

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright_automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🏗️ Project Structure

```
playwright_automation/
├── tests/
│   ├── assertions.spec.js      # Assertion testing examples
│   ├── example.spec.js          # Basic Playwright examples
│   ├── firstTest.spec.js        # Initial test cases
│   ├── loginTest.spec.js        # Authentication testing
│   └── selectors.spec.js        # Selector strategy examples
├── playwright-report/           # Generated HTML reports
├── test-results/               # Test execution results
├── playwright.config.js        # Playwright configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific browser
```bash
# Chromium (Chrome)
npx playwright test --project chromium

# Firefox
npx playwright test --project firefox

# WebKit (Safari)
npx playwright test --project webkit
```

### Run a specific test file
```bash
npx playwright test tests/loginTest.spec.js
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run tests with debugging
```bash
npx playwright test --debug
```

### Generate and view HTML report
```bash
npx playwright show-report
```

## 📊 Test Configuration

The project is configured with the following settings:

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled for faster runs
- **Retries**: 2 retries on CI, 0 locally
- **Workers**: 1 on CI, unlimited locally
- **Reporter**: HTML reports
- **Trace Collection**: Enabled on first retry for debugging

### Browser Configuration

- **Chromium**: Desktop Chrome simulation
- **Firefox**: Desktop Firefox simulation
- **WebKit**: Desktop Safari simulation

## 🧪 Test Examples

### Basic Page Navigation
```javascript
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

### User Authentication
```javascript
test('Successful Login Test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  // Assertions...
});
```

## 🔧 Development

### Adding New Tests

1. Create a new `.spec.js` file in the `tests/` directory
2. Follow the naming convention: `featureName.spec.js`
3. Use descriptive test names and organize related tests in the same file

### Best Practices

- Use semantic locators (`getByRole`, `getByLabel`, etc.) over CSS selectors
- Group related tests using `test.describe()`
- Use page objects for complex test scenarios
- Keep tests independent and isolated
- Use meaningful assertions with clear error messages

## 📈 CI/CD Integration

This project is configured for CI environments:

- Automatic retries on failures
- Parallel execution disabled on CI for stability
- HTML reports generated automatically
- Trace collection for debugging failed tests

### Example GitHub Actions workflow:
```yaml
- name: Run Playwright tests
  run: npx playwright test
- name: Upload test results
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

## 🐛 Debugging

### Using Playwright Inspector
```bash
npx playwright test --debug
```

### Viewing Traces
Traces are automatically collected on test failures. View them in the HTML report or using:
```bash
npx playwright show-trace test-results/*/trace.zip
```

### Common Issues

1. **Browser not found**: Run `npx playwright install`
2. **Tests timing out**: Increase timeout in config or use `await page.waitForLoadState()`
3. **Selectors not working**: Use `page.pause()` to inspect the page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-test`
3. Add your tests following the established patterns
4. Run tests to ensure they pass: `npx playwright test`
5. Commit your changes: `git commit -am 'Add new test cases'`
6. Push to the branch: `git push origin feature/new-test`
7. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Getting Started with Playwright](https://playwright.dev/docs/getting-started)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 🆘 Support

If you encounter issues:

1. Check the [Playwright documentation](https://playwright.dev/docs/intro)
2. Review the HTML test report for detailed error information
3. Enable traces and inspect the failed test execution
4. Check existing issues in the Playwright repository

---

Happy Testing! 🎭