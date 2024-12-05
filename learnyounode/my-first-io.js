'use strict'

const fs = require('fs');

let path = process.argv[2],
    buf = fs.readFileSync(path);

console.log(buf.toString().split("\n").length-1);
