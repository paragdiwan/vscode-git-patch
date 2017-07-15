'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createPatch } from './create';
import { applyPatch } from './apply';
import {GP}  from './constants';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableCPS = vscode.commands.registerCommand('extension.gitCreatePatchFromStaged', async () => {
        // The code you place here will be executed every time your command is executed    
        vscode.window.showQuickPick(['Yes', 'No'], {
            placeHolder: GP.DIALOG_STAGED_FILES
        }).then(function (userResponse) {
            if (userResponse.toLowerCase() === 'yes') {
                createPatch(true);
            }
            else {
                vscode.window.showInformationMessage(GP.USER_CANCELLED, GP.TIMEOUT);
                return;
            }
        })
    });

    let disposableCPU = vscode.commands.registerCommand('extension.gitCreatePatchFromUnstaged', async () => {
        // The code you place here will be executed every time your command is executed    
        vscode.window.showQuickPick(['Yes', 'No'], {
            placeHolder: GP.DIALOG_UNSTAGED_FILES
        }).then(function (userResponse) {
            if (userResponse.toLowerCase() === 'yes') {
                createPatch(false);
            }
            else {
                vscode.window.showInformationMessage(GP.USER_CANCELLED, GP.TIMEOUT);
                return;
            }
        })
    });


    let disposableAP = vscode.commands.registerCommand('extension.gitApplyPatch', async () => {
        applyPatch();
    });
    

    context.subscriptions.push(disposableCPS);
    context.subscriptions.push(disposableCPU);
    context.subscriptions.push(disposableAP);
}

// this method is called when your extension is deactivated
export function deactivate() {
}