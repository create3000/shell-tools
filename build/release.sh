#!/bin/sh

npm version patch --no-git-tag-version --force
npm publish
