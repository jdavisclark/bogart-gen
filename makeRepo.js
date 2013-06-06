var fs = require('fs')
  , colors = require('colors')
  , templater = require('./templates/repo')
  , mustache = require("mustache");

exports.RepoMaker = {
	make: function (modelName, lite, curdir) {
    var rawTemplate = require("./templates/repo.jstemplate");
    var genString = mustache.render(rawTemplate, {
      modelName: modelName,
      implement: !lite
    });

    if (!fs.stat(curdir + '/lib'))
    {
      console.log('lib directory not found, creating...'.yellow)
      fs.mkdir('lib', function (er) {
        if (!fs.stat('lib/repositories')){
          console.log('lib/repositories directory not found, creating...'.yellow)
          fs.mkdir('lib/repositories', function (error){
            fs.writeFile('lib/repositories/' + modelName + 'Repo.js', genString, function (err) {
              if (err) {
                console.log("Error".red + " generating " + modelName + " Repo:\n\n" + err)
                throw err;
              }

              console.log(modelName.green + " Repo successfully generated!".green)
            })
          })
        } else {
          fs.writeFile('lib/repositories/' + modelName + 'Repo.js', genString, function (err) {
            if (err) {
              console.log("Error".red + " generating " + modelName + " Repo:\n\n" + err)
              throw err;
            }

            console.log(modelName.green + " Repo successfully generated!".green)
          })
        }
      })
    } else {
        if (!fs.stat('lib/repositories')){
          console.log('lib/repositories directory not found, creating...'.yellow)
          fs.mkdir('lib/repositories', function (error){
            fs.writeFile('lib/repositories/' + modelName + 'Repo.js', genString, function (err) {
              if (err) {
                console.log("Error".red + " generating " + modelName + " Repo:\n\n" + err)
                throw err;
              }

              console.log(modelName.green + " Repo successfully generated!".green)
            })
          })
        } else {
          fs.writeFile('lib/repositories/' + modelName + 'Repo.js', genString, function (err) {
            if (err) {
              console.log("Error".red + " generating " + modelName + " Repo:\n\n" + err)
              throw err;
            }

            console.log(modelName.green + " Repo successfully generated!".green)
          })
        }
    }
	}
}