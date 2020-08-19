const path = require('path');
const merge = require('webpack-merge');
const StatsWriterPlugin= require("stats-webpack-plugin")
const resolve = (dir) => {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/common.scss";
        `
      }
    }
  },
  chainWebpack: (config) => {
    
    //配置eslint-loader 使用airbnb的eslint语法
    config.module
      .rule('eslint')
      .include.add([resolve('src')]).end().pre().use('eslint-loader')
      .tap(options => merge(options, {
        formatter: require("eslint-friendly-formatter")
      }));
  },
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('./src'),
          '@c': resolve('./src/components/'),
          'vue$': 'vue/dist/vue.esm.js',
          // '@p': !IS_PROD ? resolve('./public/') : `/resource/${sysName}/assets/`
        },
      },
    });
    config.plugins.push(new StatsWriterPlugin('manifest.json', {
      chunkModules: false,
      entrypoints: true,
      source: false,
      chunks: false,
      modules: false,
      assets: false,
      children: false,
      exclude: [/node_modules/]
    }))
  }
}
