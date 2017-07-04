# git-patch README


## Features

- Creates a GIT patch from staged/unstaged files.
- Apply a patch by entering a patch file name.
 
## How to use
   It supports three commands as of now:-
 
 - If you want to create a patch from stage files , then execute `gitCreatePatchFromStaged` command.
 - If you want to create a patch from unstage files , then execute `gitCreatePatchFromUnstaged` command. 
 
 - To Apply a patch execute command  `gitApplyPatch`
 - While applying, type a `patch filename` and press ENTER.

 ![GitPatch preview](https://raw.githubusercontent.com/paragdiwan/vscode-git-patch/master/images/htu.gif)


## Requirements

You must have `git` installed already.


## Known Issues/## TODO's

- have not verified in Windows but should work fine.
- creates a patch file in workspace. Need a better way to do this.
- Patch sometimes fails due to HUNK errors. 
- Patch files will be added in your git repository. You may want to ignore by putting wildcard entry in `.gitignore`.

**You are welcome to extend this extension!** :-)

**Enjoy!**
