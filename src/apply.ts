
import * as vscode from 'vscode';
import * as child_process from 'child_process';

export function applyPatch() {
    let cwd = vscode.workspace.rootPath;
    vscode.window.showInputBox({
        'placeHolder': "Enter a patch file"
    }).then(function (patchFileName) {
        if (!patchFileName) {
            return;
        }
        const cmd = `git apply --ignore-space-change --ignore-whitespace -v < ${patchFileName}`;
        child_process.exec(cmd, {
            cwd: cwd
        }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage('Error while applying a patch', 5000);
            }
            else {
                vscode.window.showInformationMessage('Patch applied successully!', 5000);
            }
        });
    });


}