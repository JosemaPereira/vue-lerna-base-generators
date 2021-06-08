const packageGenerator = require('./package');
const vuejsGenerator = require('./vue-app')

module.exports = (plop) => {
  plop.setGenerator('package', packageGenerator);
  plop.setGenerator('vuejs-app', vuejsGenerator)
};
