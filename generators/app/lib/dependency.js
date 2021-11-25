const Dependencies = {
  styleLint: [
    'stylelint',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier',
    'stylelint-config-prettier',
  ],
  prettier: ['prettier'],
  eslint: ['eslint-plugin-unused-imports', 'eslint-config-prettier', 'eslint-plugin-prettier'],
  preCommit: ['lint-staged', 'yorkie'],
};
module.exports = {
  Dependencies,
};
