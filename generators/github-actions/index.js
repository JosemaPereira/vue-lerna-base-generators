'use strict';

const actionExist = require('../utils/actionExist');
const DEFAULT_ORGANIZATION= "Sakura-PS";

module.exports = {
  description: 'Add github actions to generate version and deploy to S3',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Vue app name?',
      validate: value => {
        if (/.+/.test(value)) {
          return actionExist(value)
            ? 'A action with this name already exists'
            : true;
        }
        return 'The name is required';
      }
    }
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../.github/workflows/deploy-s3-{{kebabCase name}}.yml',
        templateFile: './github-actions/hbs/deploy.yml.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../.github/workflows/version-{{kebabCase name}}.yml',
        templateFile: './github-actions/hbs/version.yml',
        abortOnFail: true
      }
    ];

    return actions;
  }
};
