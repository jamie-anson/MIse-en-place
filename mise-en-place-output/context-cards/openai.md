# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/openai.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class OpenAiService`

**Summary:** The `OpenAiService` class likely provides an interface for integrating OpenAI's capabilities within the "Contact Page" feature to enhance functionalities such as automated responses or intelligent data processing for customer submissions.

**Signature:** `class OpenAiService { ... }`

**Methods:**

- **`constructor`**
  - **Summary:** The `constructor(apiKey: string)` method initializes an instance of an object with the provided API key, potentially to authenticate and manage secure communication within the contact form submission process on the pizza place website.
  - **Signature:** `constructor(apiKey: string)`

- **`baseApiCall`**
  - **Summary:** The `baseApiCall` method facilitates asynchronous API calls by sending a prompt and an optional system prompt, optionally handling JSON responses, to provide dynamic interaction or data retrieval functionalities within the broader contact form feature for the pizza place’s website.
  - **Signature:** `private async baseApiCall(prompt: string, systemPrompt?: string, jsonMode: boolean = false): Promise<string | null>`

- **`generatePrd`**
  - **Summary:** The `generatePrd` method asynchronously produces a product requirements document (PRD) from a given prompt, aiding in the documentation process for enhancing or developing the "Contact Page" feature.
  - **Signature:** `public async generatePrd(prompt: string): Promise<PrdOutput | null>`

- **`generateText`**
  - **Summary:** The `generateText` method asynchronously processes a given prompt to generate a string response, which could be used for creating dynamic content or responses for the contact form feature within the pizza place's website.
  - **Signature:** `public async generateText(prompt: string): Promise<string>`

---
