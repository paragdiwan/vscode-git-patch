
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import {GP}  from './constants';

export function createPatch(isStaged: boolean) {

    let cwd = vscode.workspace.rootPath;
    let cmd;

    vscode.window.showInputBox({
        'placeHolder': GP.DIALOG_PLACEHOLDER
    }).then(function (patchFileName) {
        if (patchFileName.indexOf('.') === -1) {
            patchFileName = patchFileName + '.patch';   
        }
        if (isStaged) {
            cmd = `git diff --cached > ${patchFileName}`;
        }
        else {
            cmd = `git diff > ${patchFileName}`;
        }
        child_process.exec(cmd, {
            cwd: cwd
        }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(GP.FAILED_CREATE_PATCH, GP.TIMEOUT);
            }
            else {
                vscode.window.showInformationMessage(GP.SUCCESS_CREATE_PATCH, GP.TIMEOUT);
            }
        });
    });


}