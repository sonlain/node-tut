// npm --global command,comes with node
// nom --version

//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g<packageName>
// sudo npm install -g <packageName> (mac)

//package.json -manifest file(store important info about project/package)'
//npm init (step by step,press enter to skip)
//npm init -y (evrything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)