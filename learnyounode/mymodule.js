'use strict'

const fs = require('fs'); 

module.exports = 
  function lsFilteredExt(dir, ext, cb) {
    fs.readdir(dir, function(err, data) {
      const regex = new RegExp(`.*\.${ext}$`);
      let result = [];

      if(err) { return cb(err); } /* dUnn gOof'd */

      data.forEach(function(file) {
        if(regex.test(file))
	  result.push(file);
      });

      cb(null, result);
    });
  }
