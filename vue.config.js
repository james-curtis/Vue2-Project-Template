const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/';
const lintOnSave = process.env.NODE_ENV === 'production';
module.exports = defineConfig({
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      // 开启gzip压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
  // chainWebpack(config) {
  //     // set svg-sprite-loader
  //     config.module
  //         .rule('svg')
  //         .exclude.add(resolve('src/svgicon'))
  //         .end();
  //     config.module
  //         .rule('icons')
  //         .test(/\.svg$/)
  //         .include.add(resolve('src/svgicon'))
  //         .end()
  //         .use('svg-sprite-loader')
  //         .loader('svg-sprite-loader')
  //         .options({
  //             symbolId: 'icon-[name]',
  //         })
  //         .end();
  // },
  transpileDependencies: true,
});
