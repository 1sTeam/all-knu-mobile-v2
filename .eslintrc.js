module.exports = {
  root: true,
  extends: ['eslint:recommended', '@react-native-community'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
  },
};
