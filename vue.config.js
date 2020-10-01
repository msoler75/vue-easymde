// eslint-disable-next-line import/no-extraneous-dependencies
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  css: {
    extract: false,
  },
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      easymde: {
        commonjs: 'easymde',
        commonjs2: 'easymde',
        amd: 'easymde',
        root: 'EasyMDE',
      },
      marked: 'marked',
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      }],
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  },
};
