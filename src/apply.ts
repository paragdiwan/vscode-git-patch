
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import {GP}  from './constants';

export function applyPatch() {
    let cwd = vscode.workspace.rootPath;
    let patchFiles = [];
    const defaultUri = vscode.Uri.parse(cwd);
    const options:vscode.OpenDialogOptions = {  openLabel: 'Apply patch', filters: {'patch files':['patch', 'diff']} ,canSelectMany:false};

    vscode.window.showOpenDialog(options).
    then(function (pathObject) {
        let file = pathObject[0].fsPath;
        if (file) {
            const cmd = `git apply --ignore-space-change --ignore-whitespace -v < ${file}`;
            child_process.exec(cmd, {
                cwd: cwd
            }, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showInformationMessage(GP.FAILED_APPLY_PATCH);
                }
                else {
                    vscode.window.showInformationMessage(GP.SUCCESS_APPLY_PATCH);
                }
            });
        }
        else {
            vscode.window.showErrorMessage(GP.NO_PATCH_FILES);
        }
    });
}