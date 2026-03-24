# Playwright Automation Framework

End-to-end UI test automation framework for [SauceDemo](https://www.saucedemo.com) built with industry-standard practices.

![Playwright Tests](https://github.com/SarathKumarKosanam/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Playwright](https://img.shields.io/badge/Playwright-1.x-green?logo=playwright)

## Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | Browser automation |
| TypeScript | Type-safe scripting |
| Page Object Model | Test architecture |
| GitHub Actions | CI/CD pipeline |

## Framework Structure
```
├── src/
│   └── pages/          # Page Object classes
├── tests/              # Test specs
├── .github/workflows/  # CI/CD pipeline
└── playwright.config.ts
```

## Test Coverage

- **Login** — valid login, locked user, wrong credentials, empty fields
- **Inventory** — product listing, add/remove cart, sorting
- **Checkout** — full purchase flow, form validations

## How to Run
```bash
# Install
npm install
npx playwright install

# Run all tests
npx playwright test

# Run specific suite
npx playwright test tests/login.spec.ts

# View HTML report
npx playwright show-report
```

## CI/CD

Tests run automatically on every push to `main` via GitHub Actions across **Chromium** and **Firefox**. Reports are uploaded as artifacts.

## Author

**Sarath Kumar Kosanam** — SDET | [LinkedIn](https://www.linkedin.com/in/sarathkumarkosanam-qaautomationtestengineer/) | [GitHub](https://github.com/SarathKumarKosanam)