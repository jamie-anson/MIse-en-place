# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/webview/handlers/handleContextTemplates.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `handleGenerateContextTemplates`

**Summary:** The `handleGenerateContextTemplates` function asynchronously generates context templates for Visual Studio Code extensions based on the provided context and optionally updates paths for previously generated markdown files.

**Signature:** `async function handleGenerateContextTemplates(context: vscode.ExtensionContext, lastGeneratedPaths: { md?: vscode.Uri } | undefined)`

**Dependencies:**

- `extractFeaturesFromPrd`
- `generateTemplateForFeature`

---

### `extractFeaturesFromPrd`

**Summary:** The `extractFeaturesFromPrd` function takes detailed PRD (Product Requirements Document) content and utilizes an OpenAI service to identify and return a list of key features highlighted within the document.

**Signature:** `async function extractFeaturesFromPrd(prdContent: string, openAiService: OpenAiService): Promise<string[]>`

---

### `generateTemplateForFeature`

**Summary:** The `generateTemplateForFeature` function asynchronously generates a structured documentation template for a specified feature using the provided content and an AI service.

**Signature:** `async function generateTemplateForFeature(feature: string, prdContent: string, openAiService: OpenAiService): Promise<string>`

---
