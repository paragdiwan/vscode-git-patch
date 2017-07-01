# git-patch README

This feature is still in BETA phase. You should try & provide your valuable feedback.

## Features

- Creates a GIT patch from staged files. You must stage your files in-order to create a patch.
- Apply a patch by entering a patch file name. This assumes that the patch exists in your workspace.

This feature still immature but will be extended step by step.

## How to use

 - Simply stage the file(s) which you want to create a patch of.
 - While applying just type a `patch filename` and press ENTER.


## Requirements

You must have `git` installed already.

## Extension Settings

It supports two commands as of now:-


* `gitCreatePatch`: create a patch from staging files.
* `gitApplyPatch`: Apply a patch by entering a patch file name.

## Known Issues/## TODO's

- have not verified in Windows but should work fine.
- creates a patch file in workspace. Need a better way to do this.
- Patch sometimes fails due to HUNK errors. 
- Patch files will be added in your git repository. You may want to ignore by putting wildcard entry in `.gitignore`.

**You are welcome to extend this extension!** :-)

**Enjoy!**
