
import * as vscode from 'vscode';
import * as child_process from 'child_process';

export function applyPatch() {
    let cwd = vscode.workspace.rootPath;
    vscode.window.showInputBox({
        'placeHolder': "Enter a patch file"
    }).then(function (patchFileName) {
        const cmd = `git apply --ignore-space-change --ignore-whitespace -v < ${patchFileName}`;
        child_process.exec(cmd, {
            cwd: cwd
        }, (error, stdout, stderr) => {
            const myOutputChannel = vscode.window.createOutputChannel('Git apply patch');
            myOutputChannel.show();
            if (error) {
                return myOutputChannel.append(error.message);
            }
            const successMsg = `Applied patch successfully!`;
            vscode.window.setStatusBarMessage(successMsg, 10000);
            myOutputChannel.append(stdout);
        });
    });


}