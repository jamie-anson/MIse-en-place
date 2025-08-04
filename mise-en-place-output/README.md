# Local Home Cooked Meals Platform

## 🍽️ Project Overview

A comprehensive platform connecting home cooks with local food enthusiasts, enabling the sharing and discovery of authentic, home-cooked meals within communities.

## 📋 Quick Navigation

- **[Architecture Overview](./context-cards/architecture-overview.md)** - System design and component interactions
- **[Code Standards](./context-cards/code-standards.md)** - Development guidelines and patterns
- **[Context Summary](./context-cards/context-summary.md)** - Project context and requirements
- **[Testing Strategy](./context-cards/testing-strategy.md)** - Testing approach and coverage
- **[User Flows](./context-cards/user-flows.md)** - Key user journeys and interactions

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend UI   │────│  API Gateway    │────│   Database      │
│   (React/Vue)   │    │   (Node.js)     │    │  (PostgreSQL)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         └──────────────│  Auth Service   │──────────────┘
                        │   (JWT/OAuth)   │
                        └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL 14+
- Redis (for caching)

### Setup

```bash
# Clone and install dependencies
git clone <repository-url>
cd local-home-cooked-meals-platform
npm install

# Setup environment
cp .env.example .env
# Edit .env with your database and API keys

# Initialize database
npm run db:migrate
npm run db:seed

# Start development server
npm run dev
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Route-based page components
│   ├── services/           # API and business logic
│   ├── utils/              # Helper functions and utilities
│   └── types/              # TypeScript type definitions
├── tests/
│   ├── unit/               # Unit tests for individual functions
│   ├── integration/        # Integration tests for services
│   └── e2e/               # End-to-end user journey tests
├── docs/
│   ├── api/               # API documentation
│   ├── guides/            # Development guides
│   └── architecture/      # System design documents
└── mise-en-place-output/  # Generated context and documentation
```

## 🔧 Key Features

- **User Authentication**: Secure registration and login system
- **Cook Profiles**: Detailed profiles with ratings and specialties
- **Meal Discovery**: Search and filter meals by cuisine, dietary restrictions
- **Order Management**: Complete order lifecycle from placement to delivery
- **Payment Processing**: Secure payment handling with multiple options
- **Review System**: Comprehensive rating and review functionality

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 📚 Documentation

- **[API Documentation](./docs/api/)** - Complete API reference
- **[Development Guide](./docs/guides/development.md)** - Setup and development workflow
- **[Deployment Guide](./docs/guides/deployment.md)** - Production deployment instructions
- **[Troubleshooting](./docs/guides/troubleshooting.md)** - Common issues and solutions

## 🤝 Contributing

1. Review the [Code Standards](./context-cards/code-standards.md)
2. Check existing [Context Templates](./context-templates/) for patterns
3. Write tests for new functionality
4. Update documentation as needed
5. Follow the established project structure

## 🔍 For AI Agents

This codebase includes comprehensive context cards and templates to help AI agents understand:

- **System Architecture**: Component relationships and data flow
- **Business Logic**: Core functionality and user workflows  
- **Code Patterns**: Established conventions and best practices
- **Integration Points**: External services and API connections
- **Error Handling**: Consistent error management strategies

See the [Context Cards](./context-cards/) directory for detailed component documentation.

## 📄 License

[Add your license information here]

## 🆘 Support

For issues and questions:

- Check the [Troubleshooting Guide](./docs/guides/troubleshooting.md)
- Review existing [Context Cards](./context-cards/) for component details
- Consult the [API Documentation](./docs/api/) for integration help
