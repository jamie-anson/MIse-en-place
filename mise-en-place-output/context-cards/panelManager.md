# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/commands/prdGeneration/panelManager.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class PanelManager`

**Summary:** The `PanelManager` class orchestrates the dynamic management and display of user interface panels on the pizza place website, offering a seamless transition between the homepage and the contact form to enhance user interaction.

**Signature:** `class PanelManager { ... }`

**Methods:**

- **`constructor`**
  - **Summary:** This constructor initializes the "Contact Page" feature by setting up the necessary context and message routing to manage contact form submissions.
  - **Signature:** `constructor(
        private readonly context: vscode.ExtensionContext,
        private readonly router: MessageRouter
    )`

- **`createAndShowPanel`**
  - **Summary:** The `createAndShowPanel` method asynchronously initializes and displays the contact form interface, enabling interaction with the customer submission system within the pizza place's website.
  - **Signature:** `public async createAndShowPanel(): Promise<void>`

- **`setupWebview`**
  - **Summary:** The `setupWebview` method initializes and configures a web view interface for displaying the contact form within the "Contact Page" feature, facilitating user interaction and form submission.
  - **Signature:** `private async setupWebview(): Promise<void>`

---
