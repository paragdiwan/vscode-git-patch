
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
                const myOutputChannel = vscode.window.createOutputChannel('Git apply patch');
                myOutputChannel.show();
                myOutputChannel.append(error.message);
                myOutputChannel.append(stdout);
                return;
            }
            const successMsg = `Applied patch successfully!`;
            vscode.window.setStatusBarMessage(successMsg, 10000);
        });
    });


}