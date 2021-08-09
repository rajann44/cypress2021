# Cypress Automation Framework for AutomationExercise

This is a Cypress automation framework for testing the [AutomationExercise](https://automationexercise.com/) website.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rajann44/cypress2021.git
cd cypress2021
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
cypress2021/
├── cypress/
│   ├── e2e/              # Test files
│   ├── fixtures/         # Test data
│   ├── pages/           # Page Object Models
│   └── support/         # Support files
├── cypress.config.js    # Cypress configuration
└── package.json
```

## Running Tests

1. Open Cypress Test Runner:
```bash
npx cypress open
```

2. Run tests in headless mode:
```bash
npx cypress run
```

3. Run specific test file:
```bash
npx cypress run --spec "cypress/e2e/home.cy.js"
```

## Features

- Page Object Model implementation
- Custom commands for common operations
- Support for API testing
- Screenshot capture on test failure
- Retry mechanism for flaky tests
- Cross-browser testing support

## Test Categories

1. Home Page Tests
2. Authentication Tests
3. Product Tests
4. Cart Tests
5. API Tests

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 