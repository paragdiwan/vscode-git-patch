
import * as vscode from 'vscode';
import * as child_process from 'child_process';

export function applyPatch() {
    let cwd = vscode.workspace.rootPath;
    let foundFiles = [];
    const timeout = 5000;
    vscode.workspace.findFiles("*.patch").then(function (files) {
        files.forEach(file => {
            foundFiles.push(file.fsPath);
        });
        vscode.window.showQuickPick(foundFiles).then((patchFileName) => {
            const cmd = `git apply --ignore-space-change --ignore-whitespace -v < ${patchFileName}`;
            child_process.exec(cmd, {
                cwd: cwd
            }, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showInformationMessage('Error while applying a patch', timeout);
                }
                else {
                    vscode.window.showInformationMessage('Patch applied successully!', timeout);
                }

            });
        });
    });
}