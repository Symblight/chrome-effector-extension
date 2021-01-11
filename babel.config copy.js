module.exports = {
  presets: ['react-app'],
  plugins: [
    '@babel/proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
        version: '7.0.0-beta.0',
      },
    ],
    // [
    //   'transform-rename-import',
    //   {
    //     replacements: [{ original: 'effector', replacement: 'effector-root' }],
    //   },
    // ],
  ],
  env: {
    development: {
      plugins: [
        // 'react-hot-loader/babel',
        [
          'styled-components',
          {
            displayName: true,
          },
        ],
      ],
    },
    production: {
      plugins: [['styled-components', { displayName: false }]],
    },
  },
};
