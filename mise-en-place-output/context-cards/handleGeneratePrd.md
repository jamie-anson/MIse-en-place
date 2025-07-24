# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/webview/handlers/handleGeneratePrd.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `handleGeneratePrd`

**Summary:** This async function handles the generation of a product using the provided message, extension context, and webview, returning URIs for markdown and graph files.

**Signature:** `async function handleGeneratePrd(message: any, context: vscode.ExtensionContext, webview: vscode.Webview): Promise<{ md?: vscode.Uri, graph?: vscode.Uri } | undefined>`

---
