
import * as vscode from 'vscode';
import * as child_process from 'child_process';


export function createPatch(isStaged:boolean) {
    
    let cwd = vscode.workspace.rootPath;
    let cmd;
    
    vscode.window.showInputBox({
        'placeHolder': "Enter name of patch file with/without extension"
    }).then(function (patchFileName) {
        if (patchFileName.indexOf('.') === -1) {
            patchFileName = patchFileName + '.patch';
        }
        if(isStaged) {
            cmd = `git diff --cached > ${patchFileName}`;
        }
        else {
            cmd = `git diff > ${patchFileName}`;
        }
        child_process.exec(cmd, {
            cwd: cwd
        }, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showInformationMessage('Error while creating a patch' ,5000);
                }
                else {
                    const successMsg = `Patch file "${patchFileName}" created in ${cwd}`;
                    vscode.window.showInformationMessage(successMsg,5000);    
                }
            });
    });


}