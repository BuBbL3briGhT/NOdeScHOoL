'use strict'

const fs = require('fs');

let path = process.argv[2];

fs.readFile(path, 'utf-8', function(err, data) {
	let c = data.split("\n").length-1;
	console.log(c);
});
