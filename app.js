#!/usr/bin/env node

require("./requireExtensions");
var fs = require('fs')
  , repo = require('./makeRepo').RepoMaker
  , api = require('./makeApi').ApiMaker
  , app = require('./makeApp').AppMaker
  , program = require ('commander')
  , npm = require("npm")
  , path = require("path");

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
        appRoot(function(root) {
          repo.make(program.repo, program.lite, root);
        });
    }

    if (program.api) {
      appRoot(function(root) {
        api.make(program.api, program.lite, root);
      });
    }
  });

program
  .command('new')
  .description('Scaffold a new Bogart app')
  .action(function(){
    appRoot(function(root) {
      app.make(process.argv[3], false, root);
    });
  });

program.parse(process.argv);


function appRoot(cb) {
  npm.load({}, function(er) {
    if (er) {
      throw er;
    }

    cb(path.join(npm.root, ".."));
  });
}