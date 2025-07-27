# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/webview/handlers/handleGeneratePrd.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `handleGeneratePrd`

**Summary:** The `handleGeneratePrd` function processes a request to generate a product requirements document (PRD) within a Visual Studio Code extension environment, returning URIs for the document and an associated graph if successfully created.

**Signature:** `async function handleGeneratePrd(message: any, context: vscode.ExtensionContext, webview: vscode.Webview): Promise<{ md?: vscode.Uri, graph?: vscode.Uri } | undefined>`

---
