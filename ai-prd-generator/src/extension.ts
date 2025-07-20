// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fetch from 'node-fetch';

// Define the structure of the expected output from the AI
interface PrdOutput {
    markdown: string;
    json: object;
    graph: { nodes: object[], edges: object[] };
}

// Define the structure of the Gemini API response
interface GeminiResponse {
    candidates: {
        content: {
            parts: {
                text: string;
            }[];
        };
    }[];
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "ai-prd-generator" is now active!');

    const disposable = vscode.commands.registerCommand('ai-prd-generator.generatePrd', () => {
        const panel = vscode.window.createWebviewPanel(
            'prdGenerator',
            'PRD Generator',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                // Restrict the webview to only loading content from our extension's directory.
                localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
            }
        );

        panel.webview.html = getWebviewContent();

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(
            async message => {
                if (message.command === 'generate') {
                    vscode.window.withProgress({
                        location: vscode.ProgressLocation.Notification,
                        title: "Generating PRD...",
                        cancellable: false
                    }, async (progress) => {
                        progress.report({ increment: 0, message: "Calling AI..." });

                        const apiKey = vscode.workspace.getConfiguration('aiPrdGenerator').get('geminiApiKey', '');
                        if (!apiKey) {
                            vscode.window.showErrorMessage('Gemini API key is not set. Please set it in the extension settings.');
                            panel.webview.postMessage({ command: 'error', text: 'API Key is not set.' });
                            return;
                        }

                        const response = await callGeminiAPI(message.text, apiKey as string);
                        progress.report({ increment: 50, message: "Saving files..." });

                        if (response) {
                            const workspaceFolders = vscode.workspace.workspaceFolders;
                            if (workspaceFolders && workspaceFolders.length > 0) {
                                const folderUri = workspaceFolders[0].uri;
                                const timestamp = new Date().getTime();
                                const mdPath = vscode.Uri.joinPath(folderUri, `PRD-${timestamp}.md`);
                                const jsonPath = vscode.Uri.joinPath(folderUri, `PRD-${timestamp}.json`);
                                const graphPath = vscode.Uri.joinPath(folderUri, `PRD-${timestamp}.graph.json`);

                                try {
                                    await vscode.workspace.fs.writeFile(mdPath, Buffer.from(response.markdown, 'utf8'));
                                    await vscode.workspace.fs.writeFile(jsonPath, Buffer.from(JSON.stringify(response.json, null, 2), 'utf8'));
                                    await vscode.workspace.fs.writeFile(graphPath, Buffer.from(JSON.stringify(response.graph, null, 2), 'utf8'));

                                    vscode.window.showInformationMessage(`Successfully generated PRD files!`);
                                    panel.webview.postMessage({ command: 'generationComplete', files: [mdPath.fsPath, jsonPath.fsPath, graphPath.fsPath] });
                                    vscode.commands.executeCommand('vscode.open', mdPath);
                                } catch (e) {
                                    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
                                    vscode.window.showErrorMessage(`Failed to save PRD files: ${errorMessage}`);
                                    panel.webview.postMessage({ command: 'error', text: `Failed to save files: ${errorMessage}` });
                                }
                            } else {
                                // Error is already shown by callGeminiAPI, just update webview
                                panel.webview.postMessage({ command: 'error', text: 'Failed to generate PRD from AI.' });
                            }
                        } else {
                            vscode.window.showErrorMessage('No workspace folder found. Please open a folder to save PRD files.');
                            panel.webview.postMessage({ command: 'error', text: 'No workspace folder selected.' });
                        }
                        progress.report({ increment: 100 });
                    });
                }
            },
            undefined,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);

    const viewJsonPrdCommand = vscode.commands.registerCommand('ai-prd-generator.viewJsonPrd', (uri: vscode.Uri) => {
        const panel = vscode.window.createWebviewPanel(
            'jsonPrdViewer',
            'Interactive PRD Viewer',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'src', 'media')]
            }
        );

        // Get the paths to the resources on disk
        const scriptUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'src', 'media', 'json-viewer.js'));
        const styleUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'src', 'media', 'json-viewer.css'));

        // Read the file content and send it to the webview
        vscode.workspace.fs.readFile(uri).then(document => {
            panel.webview.html = getJsonViewerWebviewContent(scriptUri, styleUri);
            panel.webview.postMessage({ command: 'renderJson', data: JSON.parse(Buffer.from(document).toString('utf-8')) });
        }).then(undefined, err => {
            vscode.window.showErrorMessage(`Could not open JSON file: ${err}`);
        });
    });

    context.subscriptions.push(viewJsonPrdCommand);

    const viewGraphPrdCommand = vscode.commands.registerCommand('ai-prd-generator.viewGraphPrd', (uri: vscode.Uri) => {
        const panel = vscode.window.createWebviewPanel(
            'graphPrdViewer',
            'Interactive Graph PRD',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'src', 'media')]
            }
        );

        const scriptUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'src', 'media', 'cytoscape.min.js'));

        vscode.workspace.fs.readFile(uri).then(document => {
            panel.webview.html = getGraphViewerWebviewContent(scriptUri);
            panel.webview.postMessage({ command: 'renderGraph', data: JSON.parse(Buffer.from(document).toString('utf-8')) });
        }).then(undefined, err => {
            vscode.window.showErrorMessage(`Could not open graph file: ${err}`);
        });
    });

    context.subscriptions.push(viewGraphPrdCommand);
}

async function callGeminiAPI(prompt: string, apiKey: string): Promise<PrdOutput | null> {
    const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
        "contents": [{
            "parts": [{
                "text": `You are a world-class product manager and system architect. Based on the following idea, generate a comprehensive Product Requirements Document (PRD) in three formats: markdown, a structured JSON, and graph data for visualization.\n\n**Product Idea:**\n${prompt}\n\n**Output MUST be a single JSON object with the following schema:**\n{\n  "type": "object",\n  "properties": {\n    "markdown": {\n      "type": "string",\n      "description": "A full PRD in Markdown format. Include sections like Introduction, User Personas, Features, User Stories, and Technical Considerations."\n    },\n    "json": {\n      "type": "object",\n      "description": "A structured JSON representation of the PRD. Use nested objects for clarity.",\n      "properties": {\n        "title": { "type": "string" },\n        "introduction": { "type": "string" },\n        "userPersonas": { \n          "type": "array",\n          "items": {\n            "type": "object",\n            "properties": {\n              "name": { "type": "string" },\n              "description": { "type": "string" }\n            }\n          }\n        },\n        "features": {\n          "type": "array",\n          "items": {\n            "type": "object",\n            "properties": {\n              "id": { "type": "string" },\n              "title": { "type": "string" },\n              "description": { "type": "string" }\n            }\n          }\n        },\n        "userStories": {\n          "type": "array",\n          "items": {\n            "type": "object",\n            "properties": {\n              "id": { "type": "string" },\n              "story": { "type": "string" },\n              "relatesToFeature": { "type": "string" }\n            }\n          }\n        }\n      }\n    },\n    "graph": {\n      "type": "object",\n      "description": "Data for a graph visualization.",\n      "properties": {\n        "nodes": {\n          "type": "array",\n          "items": {\n            "type": "object",\n            "properties": {\n              "id": { "type": "string" },\n              "label": { "type": "string" },\n              "type": { "type": "string", "enum": ["FEATURE", "USER_STORY", "USER_PERSONA"] }\n            }\n          }\n        },\n        "edges": {\n          "type": "array",\n          "items": {\n            "type": "object",\n            "properties": {\n              "id": { "type": "string" },\n              "source": { "type": "string" },\n              "target": { "type": "string" },\n              "label": { "type": "string", "enum": ["HAS_STORY", "DESCRIBES_PERSONA"] }\n            }\n          }\n        }\n      }\n    }\n  }\n}`
            }]
        }],
        "generationConfig": {
            "responseMimeType": "application/json"
        }
    };

    try {
        const res = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!res.ok) {
            const errorBody = await res.text();
            console.error('API Error:', errorBody);
            vscode.window.showErrorMessage(`API request failed: ${res.statusText}`);
            return null;
        }

        const responseData = await res.json() as GeminiResponse;
        const jsonString = responseData.candidates[0].content.parts[0].text;
        return JSON.parse(jsonString) as PrdOutput;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        vscode.window.showErrorMessage(`Error calling Gemini API: ${errorMessage}`);
        return null;
    }
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PRD Generator</title>
    </head>
    <body>
        <h1>AI-Powered PRD Generator</h1>
        <textarea id="prompt-input" rows="10" cols="50" placeholder="Enter your product idea..."></textarea>
        <br>
        <button id="generate-button">Generate PRD</button>
        <hr>
        <h2>Response</h2>
        <pre id="response-output"></pre>

        <script>
            const vscode = acquireVsCodeApi();
            const generateButton = document.getElementById('generate-button');
            const promptInput = document.getElementById('prompt-input');
            const responseOutput = document.getElementById('response-output');

            generateButton.addEventListener('click', () => {
                const prompt = promptInput.value;
                responseOutput.textContent = 'Generating...';
                generateButton.disabled = true;
                vscode.postMessage({
                    command: 'generate',
                    text: prompt
                });
            });

            window.addEventListener('message', event => {
                const message = event.data;
                switch (message.command) {
                    case 'generationComplete':
                        responseOutput.textContent = 'Success! Files created:\n' + message.files.join('\n');
                        generateButton.disabled = false;
                        break;
                    case 'error':
                        responseOutput.textContent = 'Error: ' + message.text;
                        generateButton.disabled = false;
                        break;
                }
            });
        </script>
    </body>
    </html>`;
}

function getJsonViewerWebviewContent(scriptUri: vscode.Uri, styleUri: vscode.Uri): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JSON PRD Viewer</title>
        <link href="${styleUri}" rel="stylesheet" />
        <script src="${scriptUri}"></script>
    </head>
    <body>
        <div id="json-container"></div>
        <script>
            const vscode = acquireVsCodeApi();
            const container = document.getElementById('json-container');

            window.addEventListener('message', event => {
                const message = event.data;
                if (message.command === 'renderJson') {
                    const viewer = new JsonViewer({
                        container: container,
                        data: message.data,
                        theme: 'dark',
                        expand: true
                    });
                }
            });
        </script>
    </body>
    </html>`;
}

function getGraphViewerWebviewContent(scriptUri: vscode.Uri): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Graph PRD Viewer</title>
        <script src="${scriptUri}"></script>
        <style>
            body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
            #cy { width: 100%; height: 100%; display: block; }
        </style>
    </head>
    <body>
        <div id="cy"></div>
        <script>
            const vscode = acquireVsCodeApi();
            const cyContainer = document.getElementById('cy');

            window.addEventListener('message', event => {
                const message = event.data;
                if (message.command === 'renderGraph') {
                    const cy = cytoscape({
                        container: cyContainer,
                        elements: message.data,
                        style: [
                            {
                                selector: 'node',
                                style: {
                                    'background-color': '#666',
                                    'label': 'data(label)'
                                }
                            },
                            {
                                selector: 'edge',
                                style: {
                                    'width': 3,
                                    'line-color': '#ccc',
                                    'target-arrow-color': '#ccc',
                                    'target-arrow-shape': 'triangle',
                                    'curve-style': 'bezier'
                                }
                            }
                        ],
                        layout: {
                            name: 'cose',
                            idealEdgeLength: 100,
                            nodeOverlap: 20,
                            refresh: 20,
                            fit: true,
                            padding: 30,
                            randomize: false,
                            componentSpacing: 100,
                            nodeRepulsion: 400000,
                            edgeElasticity: 100,
                            nestingFactor: 5,
                            gravity: 80,
                            numIter: 1000,
                            initialTemp: 200,
                            coolingFactor: 0.95,
                            minTemp: 1.0
                        }
                    });
                }
            });
        </script>
    </body>
    </html>`;
}

export function deactivate() {}
