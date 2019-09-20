#!/usr/bin/node

const fs  = require('fs'),
     dir = process.argv[2];

try {
  fs.mkdirSync(dir);
    } catch(err) {
    console.error(err.message);
      process.exit(1);

}
