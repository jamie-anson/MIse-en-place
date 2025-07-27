# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/errorHandler.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `handleError`

**Summary:** The `handleError` function manages and displays error information within a specified context, optionally utilizing a Visual Studio Code webview for enhanced error presentation.

**Signature:** `function handleError(
    error: any, 
    context: ErrorContext, 
    webview?: vscode.Webview
): void`

**Dependencies:**

- `formatErrorMessage`
- `formatUserMessage`

---

### `handleGenerationError`

**Summary:** The `handleGenerationError` function manages errors that occur during specific operations related to the "Contact Page" feature, optionally relaying error information to a provided VS Code webview for debugging or user notification purposes.

**Signature:** `function handleGenerationError(
    error: any, 
    operation: string, 
    webview?: vscode.Webview
): void`

**Dependencies:**

- `handleError`

---

### `handleFileError`

**Summary:** The `handleFileError` function manages and reports errors encountered during file operations on the specified file path within the VS Code extension context, optionally communicating the error to a webview if provided.

**Signature:** `function handleFileError(
    error: any, 
    operation: string, 
    filePath: string, 
    webview?: vscode.Webview
): void`

**Dependencies:**

- `handleError`

---

### `handleApiError`

**Summary:** The `handleApiError` function manages errors encountered during API calls by logging the error details and optionally displaying an error message within a Visual Studio Code webview, helping maintain smooth operation and user feedback within the contact form submission process.

**Signature:** `function handleApiError(
    error: any, 
    service: string, 
    operation: string, 
    webview?: vscode.Webview
): void`

**Dependencies:**

- `handleError`

---

### `formatErrorMessage`

**Summary:** The `formatErrorMessage` function generates a user-friendly error message based on the provided error details and context, enhancing error handling within the "Contact Page" feature.

**Signature:** `function formatErrorMessage(error: any, context: ErrorContext): string`

---

### `formatUserMessage`

**Summary:** The `formatUserMessage` function generates a user-friendly error message based on the provided error and context information, enhancing the contact page's error handling by offering clear and concise feedback to users.

**Signature:** `function formatUserMessage(error: any, context: ErrorContext): string`

---

### `withErrorHandling`

**Summary:** The `withErrorHandling` function executes a given asynchronous operation with enhanced error management, allowing context-specific handling and optional user-facing error notifications through a webview interface in a visual editor environment.

**Signature:** `async function withErrorHandling<T>(
    operation: () => Promise<T>,
    context: ErrorContext,
    webview?: vscode.Webview
): Promise<T | undefined>`

**Dependencies:**

- `handleError`

---
