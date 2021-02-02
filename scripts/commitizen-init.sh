#!/bin/bash
CZ_INIT_SCRIPT='var p=require("./package.json");p.config=p.config||{};p.config.ghooks={"commit-msg":"./node_modules/validate-commit-msg/index.js"};require("fs").writeFileSync("./package.json",JSON.stringify(p,null,2)+require("os").EOL);'
yarn add ghooks validate-commit-msg --save-dev && commitizen init cz-conventional-changelog --force --save-dev --save-exact && node -e "$CZ_INIT_SCRIPT"
