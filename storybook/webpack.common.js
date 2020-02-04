const path = require('path');

// Import dependencies.
const globImporter = require('node-sass-glob-importer');
const autoprefixer = require('autoprefixer');

/**
 * Default modules loader for JavaScript.
 */
const javascript = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [],
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            { decoratorsBeforeExport: true },
          ],
          ['@babel/proposal-class-properties', { loose: true }],
          '@babel/proposal-object-rest-spread',
        ],
      },
    },
  ],
};

/**
 * Default modules loader for CSS.
 *
 * @TODO Confirm is autoprefixer is actually working.
 */
const css = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: function () {
          return [autoprefixer]
        }
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          importer: globImporter(),
        },
      }
    },
  ],
};

/**
 * Default modules loader for assets.
 */
const assets = {
  test: /\.(woff|woff2|eot|ttf|svg|ico|jpe?g|png)$/,
  use: ['file-loader'],
};

/**
 * Shared plugins.
 */
const plugins = [];

// Export common webpack configurations.
module.exports = {
  javascript,
  css,
  assets,
  plugins,
};
