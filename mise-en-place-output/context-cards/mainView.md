# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/webviews/mainView.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `getWebviewContent`

**Summary:** The function `getWebviewContent` generates and returns a string containing HTML content for a webview panel in a VS Code extension, utilizing the provided script URI for including necessary scripts.

**Signature:** `function getWebviewContent(scriptUri: vscode.Uri, webview: vscode.WebviewPanel): string`

**Dependencies:**

- `getNonce`

---

### `getNonce`

**Summary:** The `getNonce()` function generates a unique, random string used to ensure security by preventing replay attacks or double submission of forms within the Review and Rating System.

**Signature:** `function getNonce()`

---
