module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'error',
    eqeqeq: 'error',
    indent: ['warn', 2],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: null,
        },
        multiline: {
          max: null,
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['./*/', '**../'],
            message:
              'Relative imports are not allowed. Please use absolute imports instead.',
          },
        ],
      },
    ],
  },
};
