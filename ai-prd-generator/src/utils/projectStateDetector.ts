// @ts-nocheck
/**
 * @file projectStateDetector.ts
 * @description Detects existing artifacts in the project to enable context-aware UI behavior.
 * 
 * The logic of this file is to:
 * 1. Scan the workspace for existing PRD files, Context Cards, and Context Templates.
 * 2. Provide a comprehensive project state object that indicates which artifacts exist.
 * 3. Enable the webview UI to show only relevant sections based on detected artifacts.
 * 4. Support user-configured paths and common file patterns for artifact detection.
 */

import * as vscode from 'vscode';
import { getPrdOutputPath, getContextCardOutputPath, getContextTemplateOutputPath, getDiagramOutputPath, getCcsOutputPath, getHandoverOutputPath } from './configManager';

/**
 * Interface representing the current state of generated artifacts in the project.
 * Used by the webview UI to determine which sections to show or hide.
 */
export interface ProjectState {
    /** Whether any PRD files exist in the project */
    hasPRD: boolean;
    /** Whether any Context Card files exist in the project */
    hasContextCards: boolean;
    /** Whether any Context Template files exist in the project */
    hasContextTemplates: boolean;
    /** Whether data flow diagram exists */
    hasDataFlowDiagram: boolean;
    /** Whether component hierarchy diagram exists */
    hasComponentHierarchy: boolean;
    /** Whether CCS (Code Comprehension Score) analysis exists */
    hasCCS: boolean;
    /** Array of URIs pointing to detected PRD files */
    prdFiles: vscode.Uri[];
    /** Array of URIs pointing to detected Context Card files */
    contextCardFiles: vscode.Uri[];
    /** Array of URIs pointing to detected Context Template files */
    contextTemplateFiles: vscode.Uri[];
    /** Array of URIs pointing to detected CCS analysis files */
    ccsFiles: vscode.Uri[];
    /** Number of PRD files found */
    prdCount: number;
    /** Number of context card files found */
    contextCardCount: number;
    /** Number of context template files found */
    contextTemplateCount: number;
    /** Array of URIs pointing to detected data flow diagram files */
    dataFlowDiagramFiles: Array<{ fsPath: string }>;
    /** Array of URIs pointing to detected component hierarchy files */
    componentHierarchyFiles: Array<{ fsPath: string }>;
    /** Number of CCS analysis files found */
    ccsCount: number;
    /** Whether a handover document exists */
    hasHandover: boolean;
    /** Array of URIs pointing to detected handover documents */
    handoverFiles: vscode.Uri[];
    /** Number of handover documents found */
    handoverCount: number;
}

/**
 * Logic Step: Main class for detecting project artifacts and determining UI state.
 * This class provides static methods to scan the workspace and identify existing
 * PRD files, Context Cards, and Context Templates.
 */
export class ProjectStateDetector {
    /**
     * Logic Step: Detect the current state of generated artifacts in the workspace.
     * This is the main entry point that orchestrates the detection of all artifact types.
     * @returns ProjectState object containing detection results and file counts
     */
    public static async detectProjectState(): Promise<ProjectState> {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            // Return a default empty state if no workspace is open
            return {
                hasPRD: false, hasContextCards: false, hasContextTemplates: false,
                hasDataFlowDiagram: false, hasComponentHierarchy: false, hasCCS: false, hasHandover: false,
                prdFiles: [], contextCardFiles: [], contextTemplateFiles: [], ccsFiles: [], handoverFiles: [],
                prdCount: 0, contextCardCount: 0, contextTemplateCount: 0, ccsCount: 0, handoverCount: 0,
                dataFlowDiagramFiles: [], componentHierarchyFiles: []
            };
        }

        const workspaceUri = workspaceFolders[0].uri;
        console.log(`[ProjectStateDetector] Workspace URI: ${workspaceUri.fsPath}`);

        try {
            const [
                prdFiles,
                contextCardFiles,
                contextTemplateFiles,
                ccsFiles,
                handoverFiles,
                hasDataFlowDiagram,
                hasComponentHierarchy
            ] = await Promise.all([
                this.findPRDFiles(workspaceUri),
                this.findContextCardFiles(workspaceUri),
                this.findContextTemplateFiles(workspaceUri),
                this.findCCSFiles(workspaceUri),
                this.findHandoverFiles(workspaceUri),
                this.checkDiagramExists(workspaceUri, 'data-flow-diagram.json'),
                this.checkDiagramExists(workspaceUri, 'component-hierarchy-diagram.json')
            ]);

            return {
                hasPRD: prdFiles.length > 0,
                prdFiles,
                prdCount: prdFiles.length,
                hasContextCards: contextCardFiles.length > 0,
                contextCardFiles,
                contextCardCount: contextCardFiles.length,
                hasContextTemplates: contextTemplateFiles.length > 0,
                contextTemplateFiles,
                contextTemplateCount: contextTemplateFiles.length,
                hasDataFlowDiagram,
                hasComponentHierarchy,
                hasCCS: ccsFiles.length > 0,
                ccsFiles,
                ccsCount: ccsFiles.length,
                hasHandover: handoverFiles.length > 0,
                handoverFiles,
                handoverCount: handoverFiles.length,
                dataFlowDiagramFiles: hasDataFlowDiagram ? [{ fsPath: vscode.Uri.joinPath(getDiagramOutputPath(workspaceUri), 'data-flow-diagram.json').fsPath }] : [],
                componentHierarchyFiles: hasComponentHierarchy ? [{ fsPath: vscode.Uri.joinPath(getDiagramOutputPath(workspaceUri), 'component-hierarchy-diagram.json').fsPath }] : [],
            };
        } catch (error) {
            console.error('Error detecting project state:', error);
            // Return a default empty state in case of unexpected errors
            return {
                hasPRD: false, hasContextCards: false, hasContextTemplates: false,
                hasDataFlowDiagram: false, hasComponentHierarchy: false, hasCCS: false, hasHandover: false,
                prdFiles: [], contextCardFiles: [], contextTemplateFiles: [], ccsFiles: [], handoverFiles: [],
                prdCount: 0, contextCardCount: 0, contextTemplateCount: 0, ccsCount: 0, handoverCount: 0,
                dataFlowDiagramFiles: [], componentHierarchyFiles: []
            };
        }
    }

    /**
     * Logic Step: Find PRD files in the workspace by scanning common locations and patterns.
     * Searches both the mise-en-place-output directory and root directory for PRD-like files.
     * @param workspaceUri The root URI of the current workspace
     * @returns Array of URIs pointing to detected PRD files
     */
    private static async findPRDFiles(workspaceUri: vscode.Uri): Promise<vscode.Uri[]> {
        try {
            const prdFiles: vscode.Uri[] = [];

            // Check configured PRD output directory and its subdirectories
            const outputDir = getPrdOutputPath(workspaceUri);
            const outputFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(outputDir, '**/*.md'),  // Search recursively
                null,
                100
            );
            
            // Filter for PRD-like files
            for (const file of outputFiles) {
                const fileName = file.fsPath.toLowerCase();
                if (fileName.includes('prd') || fileName.includes('product-requirements')) {
                    prdFiles.push(file);
                }
            }

            // Also check root directory for common PRD file names
            const rootPrdFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(workspaceUri, '{PRD.md,prd.md,product-requirements.md,ProductRequirements.md}'),
                '**/node_modules/**',
                10
            );
            prdFiles.push(...rootPrdFiles);

        } catch (error) {
            console.log('Error finding PRD files:', error);
        }

        return prdFiles;
    }

    /**
     * Logic Step: Find Context Card files in the user-configured or default directory.
     * Uses the VS Code configuration to determine the correct path for context cards.
     * @param workspaceUri The root URI of the current workspace
     * @returns Array of URIs pointing to detected Context Card files
     */
    private static async findContextCardFiles(workspaceUri: vscode.Uri): Promise<vscode.Uri[]> {
        try {
            // Get user-configured path using configuration manager
            
            const contextCardDir = getContextCardOutputPath(workspaceUri);
            const contextCardFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(contextCardDir, '*.md'),
                null,
                1000
            );

            return contextCardFiles;
        } catch (error) {
            console.log('Error finding context card files:', error);
            return [];
        }
    }

    /**
     * Logic Step: Find Context Template files in the user-configured or default directory.
     * Uses the VS Code configuration to determine the correct path for context templates.
     * @param workspaceUri The root URI of the current workspace
     * @returns Array of URIs pointing to detected Context Template files
     */
    private static async findContextTemplateFiles(workspaceUri: vscode.Uri): Promise<vscode.Uri[]> {
        try {
            // Get user-configured path using configuration manager
            
            const contextTemplateDir = getContextTemplateOutputPath(workspaceUri);
            const contextTemplateFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(contextTemplateDir, '*.md'),
                null,
                1000
            );

            return contextTemplateFiles;
        } catch (error) {
            console.log('Error finding context template files:', error);
            return [];
        }
    }

    /**
     * Logic Step: Find CCS (Code Comprehension Score) analysis files in the user-configured or default directory.
     * Uses the VS Code configuration to determine the correct path for CCS files.
     * @param workspaceUri The root URI of the current workspace
     * @returns Array of URIs pointing to detected CCS analysis files
     */
    private static async findCCSFiles(workspaceUri: vscode.Uri): Promise<vscode.Uri[]> {
        try {
            // Get user-configured path using configuration manager
            const ccsDir = getCcsOutputPath(workspaceUri);
            const ccsFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(ccsDir, 'ccs-analysis-*.md'),
                null,
                1000
            );

            return ccsFiles;
        } catch (error) {
            console.log('Error finding CCS files:', error);
            return [];
        }
    }

    /**
     * Logic Step: Check if a specific diagram file exists in the context templates directory.
     * @param workspaceUri The root URI of the current workspace
     * @param fileName The name of the diagram file to check for
     * @returns Boolean indicating whether the diagram file exists
     */
    private static async checkDiagramExists(workspaceUri: vscode.Uri, fileName: string): Promise<boolean> {
        try {
            // Get user-configured path using configuration manager
            const diagramDir = getDiagramOutputPath(workspaceUri);
            
            // First, check if the directory exists
            try {
                await vscode.workspace.fs.stat(diagramDir);
            } catch (dirError) {
                console.log(`[ProjectStateDetector] Diagram directory not found at ${diagramDir.fsPath}`);
                return false;
            }
            
            const diagramPath = vscode.Uri.joinPath(diagramDir, fileName);
            
            // Debug logging for diagram file detection
            console.log(`[ProjectStateDetector] Checking diagram: ${fileName}`);
            console.log(`[ProjectStateDetector] Full path: ${diagramPath.fsPath}`);
            
            // Check if file exists
            try {
                await vscode.workspace.fs.stat(diagramPath);
                console.log(`[ProjectStateDetector] ✅ Found diagram: ${fileName}`);
                return true;
            } catch (fileError) {
                if (fileError instanceof vscode.FileSystemError) {
                    console.log(`[ProjectStateDetector] ❌ Diagram file not found: ${fileName}`);
                } else {
                    console.error(`[ProjectStateDetector] ❌ Error checking diagram file ${fileName}:`, fileError);
                }
                return false;
            }
        } catch (error) {
            console.error(`[ProjectStateDetector] ❌ Unexpected error in checkDiagramExists for ${fileName}:`, error);
            return false;
        }
    }

    /**
     * Logic Step: Find Handover files in the user-configured or default directory.
     * Uses the VS Code configuration to determine the correct path for handover documents.
     * @param workspaceUri The root URI of the current workspace
     * @returns Array of URIs pointing to detected Handover files
     */
    private static async findHandoverFiles(workspaceUri: vscode.Uri): Promise<vscode.Uri[]> {
        try {
            const handoverDir = getHandoverOutputPath(workspaceUri);
            const handoverFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(handoverDir, 'HANDOVER.md'),
                null,
                10
            );
            return handoverFiles;
        } catch (error) {
            console.log('Error finding handover files:', error);
            return [];
        }
    }
}
