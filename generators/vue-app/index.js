'use strict';

const packageExists = require('../utils/packageExists');
const DEFAULT_ORGANIZATION= "Sakura-PS";

module.exports = {
  description: 'Add a VueJS based Single Page Application package',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: value => {
        if (/.+/.test(value)) {
          return packageExists(value)
            ? 'A package with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'organization',
      message: 'Organization Name. Default: ' + DEFAULT_ORGANIZATION,
    }
  ],
  actions: data => {
    data.currentYear = new Date().getFullYear();
    data.organization = data.organization || DEFAULT_ORGANIZATION;
    const actions = [
      {
        type: 'addMany',
        destination: '../packages/vue-app-{{kebabCase name}}/',
        base: './vue-app/hbs',
        templateFiles: ['./vue-app/hbs/**/**', './vue-app/hbs/**/.*', '!./vue-app/hbs/LICENSE.hbs','!./vue-app/hbs/.env.hbs'],
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/vue-app-{{kebabCase name}}/LICENSE',
        templateFile: './vue-app/hbs/LICENSE.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/vue-app-{{kebabCase name}}/.env',
        templateFile: './vue-app/hbs/.env.hbs',
        abortOnFail: true
      }
    ];

    return actions;
  }
};
