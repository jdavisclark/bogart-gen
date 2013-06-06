#!/usr/bin/env node

require("./requireExtensions");
var fs = require('fs')
  , repo = require('./makeRepo').RepoMaker
  , api = require('./makeApi').ApiMaker
  , app = require('./makeApp').AppMaker
  , program = require ('commander');

program
  .version('0.0.1')
  .option('-r, --repo <modelName>', 'Generate a Repository for a model', String)
  .option('-a, --api <modelName>', 'Generate an API for a model', String)
  .option('-L, --lite', 'Generate in "Lite" mode (structure only, functions are not written for you)');

program
  .command('generate [options]')
  .description('Scaffold an API or Repository (or both)')
  .action(function(){
    if (program.repo) {
      if (program.lite) {
        repo.make(program.repo, true, process.cwd());
      } else {
        repo.make(program.repo, false, process.cwd());
      }
    }

    if (program.api) {
      api.make(program.api, program.lite, process.cwd());
    }
  });

program
  .command('new')
  .description('Scaffold a new Bogart app')
  .action(function(){
    app.make(process.argv[3], false, process.cwd());
  });

program.parse(process.argv);