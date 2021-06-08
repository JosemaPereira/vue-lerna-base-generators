const packageGenerator = require('./package');
const vuejsGenerator = require('./vue-app')
const actions = require('./github-actions')

module.exports = (plop) => {
  plop.setGenerator('package', packageGenerator);
  plop.setGenerator('vuejs-app', vuejsGenerator);
  plop.setGenerator('github actions', actions)
};
