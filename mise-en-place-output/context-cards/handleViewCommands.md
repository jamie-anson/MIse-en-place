# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/webview/handlers/handleViewCommands.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `handleViewCommands`

**Summary:** The `handleViewCommands` function processes view-related commands from a given message, determining if the command pertains to viewing contact form submissions and subsequently triggering the appropriate response to display these records.

**Signature:** `async function handleViewCommands(message: any): Promise<boolean>`

**Dependencies:**

- `findCorrespondingGraphFile`

---

### `findCorrespondingGraphFile`

**Summary:** The function `findCorrespondingGraphFile` asynchronously searches for and returns the URI of a graph file related to a given production file within a Visual Studio Code extension setup, or `undefined` if no corresponding file is found.

**Signature:** `async function findCorrespondingGraphFile(prdFile: vscode.Uri): Promise<string | undefined>`

---
