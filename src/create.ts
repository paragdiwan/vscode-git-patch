
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import {GP}  from './constants';

export function createPatch(isStaged: boolean) {

    let cwd = vscode.workspace.rootPath;
    let cmd;

    vscode.window.showInputBox({
        'placeHolder': GP.DIALOG_PLACEHOLDER
    }).then(function (patchFileName) {
        if ( !patchFileName) {
            vscode.window.showErrorMessage(GP.ERROR_NO_FILE_NAME);
            return;
        }
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
                vscode.window.showErrorMessage(GP.FAILED_CREATE_PATCH);
            }
            else {
                vscode.window.showInformationMessage(GP.SUCCESS_CREATE_PATCH);
            }
        });
    });


}