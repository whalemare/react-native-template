const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.ts', '.tsx', '.ios.tsx', '.android.tsx', '.json'],
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-optional-chaining',
    'react-native-reanimated/plugin',

    // This cause disabling fast refresh, remove logs and broke app
    // [
    //   '@babel/plugin-proposal-class-properties',
    //   {
    //     loose: false,
    //   },
    // ],
  ],

  // Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
  // assumptions: {
  //   setPublicClassFields: false,
  // },
};
