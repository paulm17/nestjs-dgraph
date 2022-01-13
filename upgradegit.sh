#!/bin/bash
NOW=$(date +"%d/%m/%Y")

git add -A
git commit -m "uk $NOW commit"
git push origin

