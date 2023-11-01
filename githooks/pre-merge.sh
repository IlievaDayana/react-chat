#!/bin/bash

npm ci
git config user.name github-actions
git config user.email github-actions@github.com
npm version patch --no-git-tag-version
PACKAGE_VERSION=$(node -pe "require('./package.json').version")
npm run build
git add .
git commit -m "Build $PACKAGE_VERSION"
git push origin ${{ github.event.pull_request.head.ref }}
