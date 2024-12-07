'use strict'

const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3],
  function(err, files) {
    if(err)
      return console.log("dUnn gOof'd!", err);

    for(const file of files)
      console.log(file)
  });
