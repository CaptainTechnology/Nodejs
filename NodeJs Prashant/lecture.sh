#!/bin/bash

# Step 1: Go one directory up from where the script is being executed
cd "$(dirname "$PWD")" || { echo "Failed to go up one directory."; exit 1; }

# Step 2: Prompt for the new folder name
read -p "Enter the name of the new folder: " folder_name

# Step 3: Create the folder in the current directory (which is now the parent directory)
mkdir -p "$folder_name"

# Step 4: Change into the newly created folder
cd "$folder_name" || { echo "Failed to enter folder: $folder_name"; exit 1; }

# Step 5: Confirm current directory
pwd

# also create app.js file
touch app.js
echo "Created file: app.js"

