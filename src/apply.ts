
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import {GP}  from './constants';

export function applyPatch() {
    let cwd = vscode.workspace.rootPath;
    let patchFiles = [];

    vscode.workspace.findFiles("*.patch").then(function (files) {
        files.forEach(file => {
            patchFiles.push(file.fsPath);
        });
        
        if (patchFiles.length) {
            vscode.window.showQuickPick(patchFiles).then((patchFileName) => {
                const cmd = `git apply --ignore-space-change --ignore-whitespace -v < ${patchFileName}`;
                child_process.exec(cmd, {
                    cwd: cwd
                }, (error, stdout, stderr) => {
                    if (error) {
                        vscode.window.showInformationMessage(GP.FAILED_APPLY_PATCH, GP.TIMEOUT);
                    }
                    else {
                        vscode.window.showInformationMessage(GP.SUCCESS_APPLY_PATCH, GP.TIMEOUT);
                    }
                });
            });
        }
        else {
            vscode.window.showInformationMessage(GP.NO_PATCH_FILES, GP.TIMEOUT);
        }
    });
}