# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/openai.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class OpenAiService`

**Summary:** The `OpenAiService` class interfaces with the AI-driven review moderation feature to automatically evaluate and flag user-generated reviews for inappropriate content, enhancing the integrity of the Review and Rating System on the Local Home Cooking platform.

**Signature:** `class OpenAiService { ... }`

**Methods:**

- **`constructor`**
  - **Summary:** The `constructor(apiKey: string)` method initializes a new instance of a class within the Review and Rating System by accepting an API key, which is likely used for authentication or authorization purposes when interacting with external services or APIs.
  - **Signature:** `constructor(apiKey: string)`

- **`baseApiCall`**
  - **Summary:** The `baseApiCall` method asynchronously handles the core logic for making API requests within the Review and Rating System, utilizing prompts to retrieve or submit review-related data while optionally supporting JSON response mode.
  - **Signature:** `private async baseApiCall(prompt: string, systemPrompt?: string, jsonMode: boolean = false): Promise<string | null>`

- **`generatePrd`**
  - **Summary:** The `generatePrd` method is likely responsible for creating a product requirements document (PRD) from a given prompt, serving as a tool to assist in documenting feature specifications within the overall development process of the Local Home Cooking platform.
  - **Signature:** `public async generatePrd(prompt: string): Promise<PrdOutput | null>`

- **`generateText`**
  - **Summary:** The `generateText` method asynchronously generates and returns a text string based on a given prompt, likely supporting functionalities such as creating or enhancing written reviews or handling natural language inputs within the "Review and Rating System" on the Local Home Cooking platform.
  - **Signature:** `public async generateText(prompt: string): Promise<string>`

---
