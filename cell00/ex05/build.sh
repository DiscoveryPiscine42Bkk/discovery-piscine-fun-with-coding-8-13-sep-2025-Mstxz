#!/bin/sh

# If no arguments supplied, print message
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# For each argument, create directory "ex<arg>"
for arg in "$@"; do
    mkdir -p "ex$arg"
done
