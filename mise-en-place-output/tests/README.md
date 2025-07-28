# Testing Framework

## 🧪 Test Structure Overview

This testing framework provides comprehensive coverage for the Local Home Cooked Meals Platform, serving as both validation and living documentation for AI agents.

## 📁 Test Organization

```
tests/
├── unit/                   # Individual function/component tests
│   ├── components/         # UI component tests
│   ├── services/          # Business logic tests
│   ├── utils/             # Utility function tests
│   └── types/             # Type validation tests
├── integration/           # Service interaction tests
│   ├── api/               # API endpoint tests
│   ├── database/          # Database operation tests
│   └── auth/              # Authentication flow tests
├── e2e/                   # End-to-end user journey tests
│   ├── user-flows/        # Complete user scenarios
│   ├── payment/           # Payment processing tests
│   └── admin/             # Admin functionality tests
├── fixtures/              # Test data and mocks
│   ├── users.json         # Sample user data
│   ├── meals.json         # Sample meal data
│   └── orders.json        # Sample order data
└── utils/                 # Test utilities and helpers
    ├── setup.ts           # Test environment setup
    ├── mocks.ts           # Mock implementations
    └── helpers.ts         # Test helper functions
```

## 🎯 Test Categories

### Unit Tests (tests/unit/)
Tests individual functions and components in isolation.

**Example Structure:**
```typescript
// tests/unit/services/mealService.test.ts
describe('MealService', () => {
  describe('searchMeals', () => {
    it('should return meals matching cuisine filter', async () => {
      // Test implementation
    });
    
    it('should handle dietary restrictions', async () => {
      // Test implementation
    });
    
    it('should throw error for invalid parameters', async () => {
      // Test implementation
    });
  });
});
```

### Integration Tests (tests/integration/)
Tests component interactions and data flow.

**Example Structure:**
```typescript
// tests/integration/api/orderFlow.test.ts
describe('Order Flow Integration', () => {
  it('should complete full order lifecycle', async () => {
    // 1. Create user and cook
    // 2. Create meal listing
    // 3. Place order
    // 4. Process payment
    // 5. Confirm delivery
    // 6. Leave review
  });
});
```

### E2E Tests (tests/e2e/)
Tests complete user journeys from UI to database.

**Example Structure:**
```typescript
// tests/e2e/user-flows/meal-discovery.test.ts
describe('Meal Discovery Journey', () => {
  it('should allow user to discover and order meal', async () => {
    // 1. User logs in
    // 2. Searches for meals
    // 3. Filters by preferences
    // 4. Views meal details
    // 5. Places order
    // 6. Receives confirmation
  });
});
```

## 🔧 Test Configuration

### Jest Configuration (jest.config.js)
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/types/**/*'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### Test Scripts (package.json)
```json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest tests/unit",
    "test:integration": "jest tests/integration",
    "test:e2e": "jest tests/e2e",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false"
  }
}
```

## 📊 Coverage Requirements

- **Minimum Coverage**: 80% for lines, functions, branches, statements
- **Critical Paths**: 95% coverage for payment, auth, and order processing
- **UI Components**: 70% coverage with focus on user interactions
- **Utilities**: 90% coverage for helper functions

## 🛠️ Test Utilities

### Mock Data Factory (tests/fixtures/factory.ts)
```typescript
export const createMockUser = (overrides = {}) => ({
  id: '123',
  email: 'test@example.com',
  name: 'Test User',
  verified: true,
  ...overrides
});

export const createMockMeal = (overrides = {}) => ({
  id: '456',
  title: 'Homemade Pasta',
  cuisine: 'Italian',
  price: 15.99,
  cookId: '123',
  ...overrides
});
```

### Test Helpers (tests/utils/helpers.ts)
```typescript
export const setupTestDatabase = async () => {
  // Initialize test database
};

export const cleanupTestData = async () => {
  // Clean up test data
};

export const mockAuthenticatedUser = (user = createMockUser()) => {
  // Mock authentication
};
```

## 🚀 Running Tests

### Local Development
```bash
# Run all tests
npm test

# Run specific test suite
npm run test:unit
npm run test:integration
npm run test:e2e

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### CI/CD Pipeline
```bash
# Run tests in CI environment
npm run test:ci
```

## 📋 Test Checklist

For every new feature:
- [ ] Unit tests for all public functions
- [ ] Integration tests for service interactions
- [ ] E2E tests for critical user paths
- [ ] Error handling and edge case tests
- [ ] Performance tests for critical operations
- [ ] Mock external dependencies
- [ ] Update test documentation

## 🎯 AI Agent Guidelines

When creating tests:

1. **Write Descriptive Test Names**: Tests should read like specifications
2. **Follow AAA Pattern**: Arrange, Act, Assert
3. **Test Behavior, Not Implementation**: Focus on what the code should do
4. **Include Edge Cases**: Test boundary conditions and error scenarios
5. **Mock External Dependencies**: Keep tests isolated and fast
6. **Maintain Test Data**: Use factories and fixtures for consistent data

## 📚 Testing Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library](https://testing-library.com/)
- [Supertest for API Testing](https://github.com/visionmedia/supertest)
- [Playwright for E2E Testing](https://playwright.dev/)

## 🔍 Troubleshooting

### Common Issues
- **Tests timing out**: Increase timeout in jest.config.js
- **Database connection errors**: Check test database setup
- **Mock not working**: Verify mock placement and implementation
- **Coverage too low**: Add tests for uncovered branches

### Debug Commands
```bash
# Run tests with debugging
npm test -- --verbose

# Run specific test file
npm test -- tests/unit/services/mealService.test.ts

# Run tests matching pattern
npm test -- --testNamePattern="should handle errors"
```
