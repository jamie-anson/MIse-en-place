# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/configManager.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `getExtensionConfig`

**Summary:** The `getExtensionConfig` function retrieves and returns the configuration settings required for integrating an extension module, possibly related to the "Contact Page" feature or its supporting services, into the broader server application setup.

**Signature:** `function getExtensionConfig(): ExtensionConfig`

---

### `getOpenAiModel`

**Summary:** The `getOpenAiModel` function returns a string indicating the version of the OpenAI model currently used within the contact form submission processing feature.

**Signature:** `function getOpenAiModel(): string`

---

### `getPrdOutputPath`

**Summary:** The function `getPrdOutputPath` returns the URI path for the production output directory based on the provided workspace URI, facilitating accurate file location references within the project's development environment.

**Signature:** `function getPrdOutputPath(workspaceUri?: vscode.Uri): vscode.Uri`

---

### `getContextCardOutputPath`

**Summary:** The function `getContextCardOutputPath` generates and returns the file path for the output of context card operations, leveraging an optional `workspaceUri` to determine the directory location.

**Signature:** `function getContextCardOutputPath(workspaceUri?: vscode.Uri): vscode.Uri`

---

### `getContextTemplateOutputPath`

**Summary:** The function `getContextTemplateOutputPath` generates the output path for a context template file using an optional workspace URI within a Visual Studio Code environment.

**Signature:** `function getContextTemplateOutputPath(workspaceUri?: vscode.Uri): vscode.Uri`

---

### `getCcsOutputPath`

**Summary:** The `getCcsOutputPath` function retrieves the specified output path for CCS (Cloud Coverage Service) files within the given workspace URI, if provided, in the context of handling file paths related to the contact form feature.

**Signature:** `function getCcsOutputPath(workspaceUri?: vscode.Uri): vscode.Uri`

---

### `getDiagramOutputPath`

**Summary:** The function `getDiagramOutputPath` calculates and returns the URI path for storing diagram outputs within the specified VSCode workspace, if provided.

**Signature:** `function getDiagramOutputPath(workspaceUri?: vscode.Uri): vscode.Uri`

**Dependencies:**

- `getContextTemplateOutputPath`

---

### `ensureOutputDirectory`

**Summary:** The function `ensureOutputDirectory` asynchronously ensures the existence of a specified directory (represented by `outputPath`) within a Visual Studio Code extension environment, creating it if it doesn't already exist, to support contact form data handling.

**Signature:** `async function ensureOutputDirectory(outputPath: vscode.Uri): Promise<void>`

---

### `getAllOutputPaths`

**Summary:** The `getAllOutputPaths` function returns a set of predefined output directory URIs within a given workspace, specifically for storing different types of assets such as production files, context cards, context templates, diagrams, and CCS files.

**Signature:** `function getAllOutputPaths(workspaceUri?: vscode.Uri): {
    prd: vscode.Uri;
    contextCards: vscode.Uri;
    contextTemplates: vscode.Uri;
    diagrams: vscode.Uri;
    ccs: vscode.Uri;
}`

**Dependencies:**

- `getPrdOutputPath`
- `getContextCardOutputPath`
- `getContextTemplateOutputPath`
- `getDiagramOutputPath`
- `getCcsOutputPath`

---

### `validateConfiguration`

**Summary:** The `validateConfiguration` function checks for any misconfiguration or missing parameters in the setup of the contact form submission feature and returns a list of error messages if any are found.

**Signature:** `function validateConfiguration(): string[]`

**Dependencies:**

- `getExtensionConfig`

---

### `updateConfiguration`

**Summary:** The `updateConfiguration` function asynchronously updates a specified configuration setting within a Visual Studio Code workspace, ensuring the selected setting from the predefined `CONFIG_KEYS` is assigned a new value.

**Signature:** `async function updateConfiguration(
    key: keyof typeof CONFIG_KEYS,
    value: string,
    target: vscode.ConfigurationTarget = vscode.ConfigurationTarget.Workspace
): Promise<void>`

---
