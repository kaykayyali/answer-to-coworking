
var fs = require('fs')
var string = fs.readFileSync('tld_list.txt','utf8').split(/\n/).join('|').toLowerCase()


exports.string = string
