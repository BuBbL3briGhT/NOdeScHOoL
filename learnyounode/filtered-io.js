'use strict'

const fs = require('fs'),
	path = require('path'),
	filepath = process.argv[2],
	ext = '.'+process.argv[3];

fs.readdir(filepath, function(err, files) {	
	for(const file of files)
		if (path.extname(file)==ext)
			console.log(file);
});

