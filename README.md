# Playwright Automation Framework

![UI Tests](https://github.com/SarathKumarKosanam/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Playwright](https://img.shields.io/badge/Playwright-1.x-green?logo=playwright)
![Node](https://img.shields.io/badge/Node-20.x-brightgreen?logo=node.js)

A production-grade **Hybrid Test Automation Framework** built with Playwright and TypeScript. Covers end-to-end UI automation and API testing in a single repository — the industry-standard approach for modern SDET teams.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | UI automation + API testing |
| TypeScript | Type-safe scripting |
| Page Object Model | UI test architecture |
| Playwright Request Context | Built-in API client |
| Custom Fixtures | Dependency injection for API clients |
| dotenv | Secrets management |
| GitHub Actions | CI/CD pipeline |

---

## Framework Architecture
```
playwright-automation-framework/
├── src/
│   ├── pages/              # Page Object Model classes
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── api/
│   │   └── client/         # Typed API clients
│   │       ├── ApiClient.ts
│   │       ├── UserApiClient.ts
│   │       └── AuthApiClient.ts
│   ├── types/              # TypeScript interfaces
│   │   └── api.types.ts
│   ├── fixtures/           # Custom Playwright fixtures
│   │   └── fixtures.ts
│   └── utils/              # Utilities and helpers
│       └── DataGenerator.ts
├── tests/
│   ├── ui/                 # UI test specs
│   │   ├── login.spec.ts
│   │   ├── inventory.spec.ts
│   │   └── checkout.spec.ts
│   └── api/                # API test specs
│       ├── users.spec.ts
│       └── auth.spec.ts
├── test-data/              # Static test data
│   └── users.json
├── .github/workflows/      # CI/CD pipeline
├── .env.example            # Secrets template
└── playwright.config.ts    # Framework configuration
```

---

## Key Features

- **Hybrid framework** — UI and API testing in one repo, one pipeline
- **Page Object Model** — clean separation of page actions and test logic
- **Typed API clients** — base `ApiClient` extended by `UserApiClient` and `AuthApiClient`
- **TypeScript interfaces** — full type safety on all API request/response models
- **Custom fixtures** — Playwright dependency injection for API clients
- **Dynamic test data** — `DataGenerator` creates randomized payloads per run
- **Static test data** — `users.json` for fixed, reusable test inputs
- **Secrets management** — dotenv locally, GitHub Secrets in CI
- **Separate CI jobs** — UI tests and API tests run independently in parallel

---

## Test Coverage

### UI Tests (Playwright + POM)

| Feature | Scenarios |
|---------|-----------|
| Login | Valid login, locked user, wrong credentials, empty username, empty password |
| Inventory | Product count, add to cart, multiple items, sort A-Z, sort Z-A |
| Checkout | Full order flow, empty first name, empty last name, empty zip |

### API Tests (Playwright Request Context)

| Suite | Endpoint | Scenario |
|-------|----------|---------|
| Users | GET /users | Returns paginated list |
| Users | GET /users/{id} | Returns single user |
| Users | GET /users/9999 | Returns 404 for invalid id |
| Users | POST /users | Creates user, returns 201 with id |
| Users | PUT /users/{id} | Full update, returns updatedAt |
| Users | PATCH /users/{id} | Partial update |
| Users | DELETE /users/{id} | Returns 204 |
| Auth | POST /login | Valid credentials returns token |
| Auth | POST /login | Missing password returns 400 |
| Auth | POST /login | Invalid credentials returns 400 |
| Auth | POST /register | Valid payload returns token |

---

## Prerequisites

- Node.js 20+
- npm

---

## Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/SarathKumarKosanam/playwright-automation-framework.git
cd playwright-automation-framework
```

### 2. Install dependencies
```bash
npm install
npx playwright install
```

### 3. Configure secrets
```bash
cp .env.example .env
```

Edit `.env`:
```
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://reqres.in/api
```

### 4. Run all tests
```bash
npx playwright test
```

### 5. Run only UI tests
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

### 6. Run only API tests
```bash
npx playwright test --project=api
```

### 7. View HTML report
```bash
npx playwright show-report
```

---

## CI/CD Pipeline

Two independent jobs run on every push to `main`:

| Job | What it runs | Browsers |
|-----|-------------|---------|
| UI Tests | `tests/ui/` | Chromium + Firefox |
| API Tests | `tests/api/` | No browser (request only) |

Reports are uploaded as artifacts and retained for 30 days.

---

## Application Under Test

- **UI** → [SauceDemo](https://www.saucedemo.com) — e-commerce demo app
- **API** → [ReqRes.in](https://reqres.in) — free REST API for testing

---

## Author

**Sarath Kumar Kosanam**  
SDET | Automation Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/SarathKumarKosanam)
