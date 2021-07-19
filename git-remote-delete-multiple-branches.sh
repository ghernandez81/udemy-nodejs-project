#!/bin/bash
echo "Deleting Remove Multiple branch "
echo "Filtering on this string:$1"

if [ -n "$1" ]
  then
     git branch -r | awk -F/ 'BEGIN {OFS="/"} /\/feature\/gabe/ {print $2,$3,$4,$5}' | xargs -I {}
  else
    echo "No argument pass"
fi
