## Hey Terminal !

```shell
pwd                 # Where am I ?
clear               # Clean the screen

ls                  # What's in here ?
ls -a               # List all (even hidden files)
ls -la              # List all with infos
ls -lS              # Sort by file size (-laS for hidden files as well)

cd foldername       # Go in that folder
cd Folder/Folder    # Go in the folder of folder
cd ..               # Go back to parent Directory
cd                  # Go back to Home Directory

mkdir folder-name             # Create a folder
mkdir Folder1 Folder2         # Create 2 folders
mkdir "New folder"            # Create folder with space
mkdir Downloads/folder-name   # Create in the folder specified

mv Name NewName               # Renamme file/folder
mv Name Location              # Move the file/folder in the Location
mv Name Location/NewName      # Moves and rename

rm File.ext         # Remove a file
rm -rf NameDir      # Remove full directory
rmdir NameDir       # Remove empty directory

cp Name NewName               # Copy and rename file
cp Name Location              # Copy file in location (won't copy if already exists)
cp Name Location/NewName      # Copy and rename file in location
cp -R Name Location/NewName   # Copy and rename directory in location
ditto -V Name Location/NewName    # Copy and rename directory in location & report progress
ditto -V Name .     # Copy directory in current location

touch FileName.txt  # Create that file if doesn't exist
open FileName.txt   # Open to edit
code .              # Open actual folder in vscode
cat FileName.txt    # Show me the content of that file in terminal
echo "add some text" > File.extension   # Create that file with this content
grep word File.ext  # Search the word in file
find                # Locate file

chmod -R 755 path/to/directory/    # I want all permissions (0 = none, read = 4, write = 2, execute = 1)
                                   # 7 (user) 5 (users group) 5 (others)
                                   # 5 = read + execute, 6 = read + write, 7 = all rights
                                   # [To reset in pc](https://help.directadmin.com/item.php?id=589)
chmod -Rf 755 path/to/directory/   # I want all permissions to all folders and under folders
chown -R af path/to/directory/     # The owner of files is now "af"
```

# Shortcuts
| Command                      | Result                                                  |
| ---------------------------- |:-------------------------------------------------------:|
| man + commandline            | Asks Terminal to teach you about that command line      |
| <kbd>&uarr;</kbd>            | Recall Previously Entered Commands                      |
| mouse                        | Drag/Drop file from PC to terminal                      |
| .                            | Current folder                                          |
| <kbd>Tab</kbd>               | Write the existing name for me                          |
| <kbd>ctrl + c</kbd>          | Stop running that command !                             |
| <kbd>ctrl + z</kbd>          | Stop forcing                                            |
| killall Finder               | Restart Finder                                          |
| <kbd>ctrl + u</kbd>          | Erase all the line                                      |
| <kbd>ctrl + a</kbd>          | Cursor moves to the beggining of the line               |
| <kbd>ctrl + e</kbd>          | Cursor moves to the end of the line                     |
| <kbd>alt</kbd> + Right click | Cursor moves to indicated location in the line          |
| <kbd>q</kbd> or 'esc+maj+ZZ' | Quit VIM                                                |

# List all filesname in a folder
- Open folder with terminal
- `dir > filenames.txt`
- open file `filenames.txt` that have been created in the folder
