#!/bin/bash
dir_path="images"
new_name="_"

count=1

for file in "$dir_path"/*.jpg; do
	new_file="$dir_path/$new_name$count.jpg"

	mv "$file" "$new_file"

	((count++))

done

echo "All images files in $dir_path have been renamed."
