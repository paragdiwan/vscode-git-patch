'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import { createPatch } from './create';
import { applyPatch } from './apply';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "Git patch" is now active!');

    let cwd = vscode.workspace.rootPath;

    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('You have to active a file first');
        return;
    }

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableCP = vscode.commands.registerCommand('extension.gitCreatePatch', async () => {
        // The code you place here will be executed every time your command is executed    
        vscode.window.showQuickPick(['Yes', 'No'], {
            placeHolder: 'Would you like create a patch from staged files?'
        }).then(function (optionCreatePatch) {
            if (optionCreatePatch === 'Yes') {
                createPatch(vscode.workspace.rootPath);
            }
            else {
                vscode.window.setStatusBarMessage('You have cancelled operation.', 5000);
            }
        })
    });


    let disposableAP = vscode.commands.registerCommand('extension.gitApplyPatch', async () => {
        applyPatch();
    });
    

    context.subscriptions.push(disposableCP);
    context.subscriptions.push(disposableAP);
}

// this method is called when your extension is deactivated
export function deactivate() {
}