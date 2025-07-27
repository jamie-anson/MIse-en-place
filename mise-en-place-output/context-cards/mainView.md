# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/webviews/mainView.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `getWebviewContent`

**Summary:** This function generates and returns the HTML content for a webview panel in a Visual Studio Code extension, utilizing a provided script URI to ensure the required scripts are correctly referenced within the webview for rendering the contact page interface.

**Signature:** `function getWebviewContent(scriptUri: vscode.Uri, webview: vscode.WebviewPanel): string`

**Dependencies:**

- `getNonce`

---

### `getNonce`

**Summary:** The `getNonce` function generates a unique, random nonce value likely used for enhancing security, such as preventing cross-site request forgery or other security vulnerabilities related to form submissions on the contact page.

**Signature:** `function getNonce()`

---
