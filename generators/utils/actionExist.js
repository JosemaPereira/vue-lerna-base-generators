const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(
  path.join(__dirname, '../../.github/workflows')
);

function actionExist(comp) {
  return packages.indexOf(comp) >= 0;
}

module.exports = actionExist;
