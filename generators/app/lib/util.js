const FRAMEWORK_TYPE = {
  VUE: 'vue',
  ANGULAR: 'angular',
  JUSTJS: 'just-js',
};
function copyConfig(frameWork, generator) {
  switch (frameWork) {
    case FRAMEWORK_TYPE.ANGULAR:
      copyAngularConf(generator);
      break;
    case FRAMEWORK_TYPE.VUE:
      copyVueConf(generator);
      break;
    case FRAMEWORK_TYPE.JUSTJS:
      copyNormalConf(generator);
      break;
    default:
      copyNormalConf(generator);
  }
}

function copyAngularConf(generator) {
  generator.fs.copyTpl(generator.templatePath('angular/.editorconfig'), generator.destinationPath('.editorconfig'));
  generator.fs.copyTpl(generator.templatePath('angular/.eslintrc.json'), generator.destinationPath('.eslintrc.json'));
  generator.fs.copyTpl(generator.templatePath('angular/.prettierrc.js'), generator.destinationPath('.prettierrc.js'));
  generator.fs.copyTpl(generator.templatePath('angular/.stylelintrc.js'), generator.destinationPath('.stylelintrc.js'));
}
function copyVueConf(generator) {
  generator.fs.copyTpl(generator.templatePath('vue/.editorconfig'), generator.destinationPath('.editorconfig'));
  generator.fs.copyTpl(generator.templatePath('vue/.eslintrc.json'), generator.destinationPath('.eslintrc.json'));
  generator.fs.copyTpl(generator.templatePath('vue/.prettierrc.js'), generator.destinationPath('.prettierrc.js'));
  generator.fs.copyTpl(generator.templatePath('vue/.stylelintrc.js'), generator.destinationPath('.stylelintrc.js'));
}
function copyNormalConf(generator) {
  generator.fs.copyTpl(generator.templatePath('just-js/.editorconfig'), generator.destinationPath('.editorconfig'));
  generator.fs.copyTpl(generator.templatePath('just-js/.eslintrc.json'), generator.destinationPath('.eslintrc.json'));
  generator.fs.copyTpl(generator.templatePath('just-js/.prettierrc.js'), generator.destinationPath('.prettierrc.js'));
  generator.fs.copyTpl(generator.templatePath('just-js/.stylelintrc.js'), generator.destinationPath('.stylelintrc.js'));
}
function copyVSCodeSetting(generator) {
  generator.fs.copyTpl(generator.templatePath('.vscode'), generator.destinationPath('.vscode'));
}

module.exports = {
  copyConfig,
  copyVSCodeSetting,
};
