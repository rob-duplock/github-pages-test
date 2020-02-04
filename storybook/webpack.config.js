const path = require('path');

// Import dependencies.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Import common configurations.
const common = require('./webpack.common');

// Webpack configuration.
module.exports = {

  /**
   * Plugins.
   *
   * Add all common plugins.
   *
   * MiniCssExtractPlugin()
   *   A Lightweight CSS extraction webpack plugin.
   *
   * @TODO Confirm if we need to be exporting to actual CSS stylesheets.
   */
  plugins: [
    ...common.plugins,
    new MiniCssExtractPlugin({
      filename: 'styles.scss',
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
  module: {
    rules: [
      common.javascript,
      // Extend common CSS configuration with those used in build process.
      {
        ...common.css,
        use: [MiniCssExtractPlugin.loader, 'css-loader', ...common.css.use],
      },
      common.assets,
    ],
  },
};
