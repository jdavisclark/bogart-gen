var fs = require('fs')
  , colors = require('colors')
  , templater = require('./templates/api')
  , path = require('path')
  , mustache = require("mustache");

exports.ApiMaker = {
	make: function (modelName, lite, curdir) {
    var rawTemplate = require("./templates/api.jstemplate");
    var genString = mustache.render(rawTemplate, {
      modelName: modelName,
      implement: !lite
    });

    fs.writeFile(path.join(curdir, 'lib', 'apis', modelName + 'Api.js'), genString, function (err) {
      if (err) {
        console.log("Error generating " + modelName + " API:\n\n" + err);
        throw err;
      }

      console.log(modelName.green + " API successfully generated!".green);
	  });
  }
}
