#!/bin/bash

dir_path="images"
width=1080
height=1920
for file in "$dir_path"/*.jpg
do
    new_file="${file}"
    gm convert "$file" -resize 1920x1080 -gravity center -background white -extent 1920x1080 "$new_file"
done
