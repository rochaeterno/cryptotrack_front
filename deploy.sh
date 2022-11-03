#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git push -f git@github.com:rochaeterno/cryptotrack_front.git main:gh-pages