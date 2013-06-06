var fs = require('fs');

require.extensions['.jstemplate'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};