#!/bin/sh

npm version patch --no-git-tag-version --force

git add -A;
git commit -am 'Published version '`npm pkg get version | sed 's/"//g'`;
git push origin`;

npm publish
