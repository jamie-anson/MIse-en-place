# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/webview/router.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class MessageRouter`

**Summary:** The `MessageRouter` class in the "Review and Rating System" manages the routing logic for real-time notifications, alerting users to new reviews and ratings as part of the feedback process following transactions.

**Signature:** `class MessageRouter { ... }`

**Methods:**

- **`register`**
  - **Summary:** The `register` method in the Review and Rating System module allows for the registration of message handlers to process specific commands, facilitating the execution of review-related operations within the system's communication framework.
  - **Signature:** `public register(command: string, handler: MessageHandler): void`

- **`route`**
  - **Summary:** The `route` method in the "Review and Rating System" manages the routing logic for handling communication between the frontend webview and backend context within a Visual Studio Code extension, potentially facilitating the display and interaction of reviews and ratings data.
  - **Signature:** `public async route(
        message: any,
        context: vscode.ExtensionContext,
        webview: vscode.Webview,
        lastGeneratedPaths?: { md?: vscode.Uri, graph?: vscode.Uri }
    ): Promise<any>`

---
