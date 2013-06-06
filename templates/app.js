/* dependencies */
var mustache = require("mustache");

/* templates */
var settings = require('../templates/settings.jstemplate')
  , util = require('../templates/util.jstemplate')
  , middleware = require('../templates/middleware.jstemplate')
  , hello = require('../templates/hello.jstemplate')
  , appjs = require('../templates/app.jstemplate')
  , pack = require('../templates/pack.jstemplate')
  , staticContent = require('../templates/static-content.jstemplate');


module.exports = function (appName) {
  console.log(util);

	return {
      util: util,
      middleware: middleware,
      settings: settings,
      app: appjs,
      pack: mustache.render(pack, {
        appName: appName
      }),
      staticContent: staticContent,
      hello: hello
    }
}
