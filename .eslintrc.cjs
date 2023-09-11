module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'error',
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
