# Git Patch #

> IDE's like Intellij provides a feature to *create* and *apply* a patch. This is an attempt to have the same feature available for VSCODE. 

## [0.2.1] - 2018-02-10
### Added
> * Provides a context menu under SCM & File Explorer.

> * Removed extra layer of confirmation.

## [0.2.0] - 2018-02-05
### Added

> * Better way to create & apply patch via dialog.

> * Save patch at custom location.


## Features

> * Creates a GIT patch from `Staged` files on the fly.

> * Creates a GIT patch from `Unstaged` files on the fly.

> * `Apply` a patch by `selecting` a patch file on the fly.

## How this works

  ![Git create patch preview](https://raw.githubusercontent.com/paragdiwan/vscode-git-patch/master/images/vscode.gif)

 

## Requirements
You must have `git` installed already.


## Known Issues
- Patch sometimes fails due to HUNK errors. 
- Patch doesn't take care of conflicts, if any.

Kindly provide your feedback to improve this extension.

**Enjoy!**
