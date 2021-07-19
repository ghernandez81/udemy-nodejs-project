#!/bin/bash
# Probably you need to do chmod +x file-name before executing
echo "Deleting Locally Multiple branch "
echo "Filtering on this string:$1"

if [ -n "$1" ]
  then
    git for-each-ref --format="%(refname:short)" refs/heads/$1 | xargs git branch -D
  else
    echo "No argument pass"
fi
