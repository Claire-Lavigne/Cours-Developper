## Hey Terminal !

```
pwd                 // Where am I ?
clear               // Clean the screen
```

```
ls                  // What's in here ?
ls -a               // List all (even hidden files)
ls -la              // List all with infos
ls -lS              // Sort by file size (-laS for hidden files as well)
ls -lh              // Show size per kilobytes (-lah for hidden files as well)
ls -le              // List per permissions
ls -lt              // List per modification date
```

```
cd FolderName       // Go in that folder
cd Folder/Folder    // Go in the folder of folder
cd ..               // Go back 
cd                  // Go back to Home Directory
```

```
mkdir new-folder    // Create a folder "new-folder"
mkdir New Folder    // Create 2 folders "New" "Folder"
mkdir "New folder"  // Create 1 folder "New folder"
```

```
touch FileName.txt  // Create that file if doesn't exist
open FileName.txt   // Open to edit
cat FileName.txt    // Show me the content of that file in terminal
echo "add some text" > File.extension   // Create that file with this content
grep word File.ext  // Search the word "word" in that file
find                // Locate file
```

```
mv Name NewName     // Renamme file or folder (in the same location)
mv Name Location    // Move the file or folder "Name" in the Location
mv Name Location/NewName    // Moves and rename
rm -rf Name         // Remove directory with all its content
```

```
cp Name Location    // Copy that file in that location (won't copy if file already exist in location)
cp Name NewName     // Copy file (in the same location)
cp Name Location/NewName                          // Copy in new location and rename
cp -R Name Location (NewName or Location/NewName) // Copy directory
ditto -V old/folder/location new/folder/location  // Copy contents of old directory to new directory & report progress
ditto -V old/folder/location .                    // Copy content of that folder in current folder
```

```
chmod -R 775 path/to/directory/     // Give me all permissions
chown -R af path/to/directory/      // The owner of files is now "af"
```

```
man + commandline   // Asks Terminal to teach you about that command line
Up arrow            // Recall Previously Entered Commands
Mouse               // Drag/Drog file from PC to terminal
.                   // Current folder
Tab                 // Write the existing name for me
cmd/ctrl + c        // Stop running that command !
cmd/ctrl + z        // Stop forcing
killall Finder      // restart Finder
cmd/ctrl + u        // Erase all the line
cmd/ctrl + a        // Cursor moves to the beggining of the line
cmd/ctrl + e        // Cursor moves to the end of the line
alt + Right click   // Cursor moves to indicated location in the line
```
