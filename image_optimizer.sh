#!/bin/bash

# Initialise the directory containing the webp files
DIR="src/client/assets/images"

# Create a function to optimise assets within a directory
function optimise_assets() {
  for file in $1/*.webp;
  do
    if [ -f "$file" ]; then
      # Extract filename without extension for output file
      filename=$(basename -- "$file")
      filename="${filename%.*}"

      # Determine output file name
      outfile="$1/optimized/$filename.webp"

      # Use cwebp to reduce quality to 80% (change number for different quality)
      cwebp -q 80 "$file" -o "$outfile"
    fi
  done
  }

# Use find command to go through each subdirectory and run optimise_assets function
find $DIR -type d | while read dir; do optimise_assets "$dir"; done

