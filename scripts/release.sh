#!/usr/bin/env bash

package_name="`date +%Y%m%d`-okxwallet-test-dapp"
# build in ci branch
git checkout ci
git pull
git merge main --no-edit

# build in main and send to release branch
echo "Start compile $package_name"

# export REACT_APP_PACKAGE_NAME=$package_name
# Compile
pnpm build

echo "End compile $package_name"

rm -rf docs/
# mkdir -p docs
mv dist docs
mv docs/index.html docs/404.html
# cp -r dist/* docs/

git add .
git commit -m "build: Deploy for $package_name"

echo "Start push $package_name"

git push
git checkout main

# clean
rm -rf docs/
