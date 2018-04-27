#!/usr/bin/env node
const generate = require('./generate');
const commander = require('commander');
commander
  .version('1.0.0')
  .option('-g,--generate','generate a new vue file')
  .option('-m,--module','generate a new vuex moudule')
  .parse(process.argv);
if(commander.generate){
  let fileName = commander.args[0];
  if(!fileName){
    return console.log('file_name can not be undefined')
  }
  fileName = fileName.split('.')[0] + '.vue';
  generate.run(fileName,'file');
}

if(commander.module){
  let moudle_name = commander.args[0];
  if(!moudle_name){
    return console.log('moudle_name can not be undefined')
  }
  generate.run(moudle_name,'module');
}
