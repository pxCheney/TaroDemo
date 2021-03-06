/* eslint-disable import/no-commonjs */
const path = require('path')

const config = {
  projectName: 'myApp',
  date: '2020-5-8',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  // outputRoot: `dist/${process.env.TARO_ENV}`,
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  defineConstants: {
  },
  alias: {
    // '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@ASSETS': path.resolve(__dirname, '..', 'src/assets'),
    '@COMPONENTS': path.resolve(__dirname, '..', 'src/components'),
    '@CONSTANT': path.resolve(__dirname, '..', 'src/constants'),
    '@UTILS': path.resolve(__dirname, '..', 'src/utils'),
    '@PAGES': path.resolve(__dirname, '..', 'src/utils'),
    '@API': path.resolve(__dirname, '..', 'src/services'),
    '@STYLES': path.resolve(__dirname, '..', 'src/styles'),
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          // autoprefixer 配置项
        }
      },
      pxtransform: {
        enable: true,
        config: {
          // pxtransform 配置项，参考尺寸章节
        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      // cssModules: {
      //   enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      //   config: {
      //     namingPattern: 'module', // 转换模式，取值为 global/module
      //     generateScopedName: '[name]__[local]___[hash:base64:5]'
      //   }
      // }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {
          platform: 'h5',
          designWidth: 750,
          onePxTransform: true,
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // weapp: {
  //   module: {
  //     postcss: {
  //       autoprefixer: {
  //         enable: true,
  //         config: {
  //           browsers: [
  //             'last 3 versions',
  //             'Android >= 4.1',
  //             'ios >= 8'
  //           ]
  //         }
  //       },
  //       pxtransform: {
  //         enable: true,
  //         config: {
  //           platform: 'weapp',
  //           designWidth: 375,
  //           onePxTransform: true,
  //         }
  //       },
  //     }
  //   }
  // },
  rn: {
    appJson: {
      // NOTE taro-native-shell 中默认用的是 taroDemo
      name: 'taroDemo'
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
