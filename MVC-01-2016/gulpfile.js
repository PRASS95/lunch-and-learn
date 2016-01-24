require('babel-core/register')({});

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });