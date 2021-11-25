const Generator = require('yeoman-generator');
const { Dependencies } = require('./lib/dependency');
const { copyConfig, copyVSCodeSetting } = require('./lib/util');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  async initPackage() {
    this.answer = await this.prompt([
      {
        type: 'list',
        name: 'frameWork',
        choices: [
          {
            name: 'Vue',
            value: 'vue',
          },
          {
            name: 'Angular',
            value: 'angular',
          },
          {
            name: 'Just JS',
            value: 'just-js',
          },
        ],
      },
    ]);
    const pkgJson = {
      scripts: {
        prettier: 'prettier -w src/app/**/*',
        stylelint: 'stylelint src/app/**/*.css',
      },
      husky: {
        hooks: {
          'pre-commit': 'lint-staged',
        },
      },
      'lint-staged': {
        linters: {
          'src/app/**/*.less': ['stylelint --syntax less --fix', 'git add'],
          'src/app/**/*.{html,ts,less,js}': ['prettier --write', 'git add'],
        },
      },
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    let devDependencies = [
      ...Dependencies.eslint,
      ...Dependencies.preCommit,
      ...Dependencies.prettier,
      ...Dependencies.styleLint,
    ];
    this.npmInstall(devDependencies, {
      'save-dev': true,
    });
  }
  async copyTemplate() {
    copyConfig(this.answer.frameWork, this);
    const answers = await this.prompt([
      {
        type: 'confirm',
        name: 'isVSCode',
        message: 'Would like add vscode setting in your project?',
      },
    ]);
    if (answers.isVSCode) {
      copyVSCodeSetting(this);
    }
  }
};