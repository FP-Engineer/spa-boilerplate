#! /bin/bash
npx msw init public/ --save
yarn run husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
npx semantic-release-cli setup