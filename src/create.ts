
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
            const myOutputChannel = vscode.window.createOutputChannel('Git create patch');
            myOutputChannel.show();
            if (error) {
                return myOutputChannel.append(error.message);
            }
            const successMsg = `Patch created in ${cwd}`;
            vscode.window.setStatusBarMessage(successMsg, 10000);
            myOutputChannel.append(stdout);
        });
    });


}