const packageGenerator = require('./package');

module.exports = (plop) => {
  plop.setGenerator('package', packageGenerator);
};
