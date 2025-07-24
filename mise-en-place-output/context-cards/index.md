# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/context-card-generator/index.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class ContextCardGenerator`

**Summary:** This class generates context cards.

**Signature:** `class ContextCardGenerator { ... }`

**Methods:**

- **`constructor`**
  - **Summary:** This method creates a new instance of a class with private properties for the workspace URI and extension context.
  - **Signature:** `constructor(private workspaceUri: vscode.Uri, private context: vscode.ExtensionContext)`

- **`generateAndSaveContextCards`**
  - **Summary:** This method asynchronously generates and saves context cards.
  - **Signature:** `public async generateAndSaveContextCards(): Promise<void>`

---
