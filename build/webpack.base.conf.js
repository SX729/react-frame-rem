const path = require("path");
const utils = require("./utils");
const config = require("../config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const multiHelper = require('./multipage-helper');
const devMode = process.env.NODE_ENV !== 'production'
const autoprefixer = require('autoprefixer');

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    ...multiHelper.getEntries()
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath: process.env.NODE_ENV === "production" ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [resolve("src"), resolve("node_modules")],
    alias: {
      '@': resolve("src"),
      '@static': resolve("static"),
      '@assets': resolve("src/assets"),
      '@components': resolve("src/components"),
      '@config': resolve("src/config"),
      '@mocks': resolve("src/mocks"),
      '@redux': resolve("src/redux"),
      '@routes': resolve("src/routes"),
      '@services': resolve("src/services"),
      '@utils': resolve("src/utils"),
      '@views': resolve("src/views")
    }
  },
  module: {
    rules: [
      //   {
      //   test: /\.jsx$/,
      //   loader: 'webpack-px2rem-loader',
      //   // 这个配置是可选的
      //   query: {
      //     // 1rem=npx 默认为 10
      //     basePx: 37.5,
      //     // 只会转换大于min的px 默认为0
      //     // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
      //     min: 1,
      //     // 转换后的rem值保留的小数点后位数 默认为3
      //     floatWidth: 3
      //   }
      // }, 

      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [resolve("src"), resolve("test")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("test")],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("test")],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }, {
        test: /\.md$/,
        use: [{
          loader: "html-loader"
        }, {
          loader: "markdown-loader"
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: "css-loader"
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
              require('postcss-pxtorem')({
                rootValue: 16,
                unitPrecision: 5,
                propList: ['*'],
                selectorBlackList: [],
                replace: true,
                mediaQuery: false,
                minPixelValue: 12
              })
            ]
          }
        }]
      },
      {
        // antd 自定义主题
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                require('postcss-pxtorem')({
                  rootValue: 32, //结果为：设计稿元素尺寸/32，比如元素宽320px,最终页面会换算成 10rem
                  propList: ['*']
                })
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: {
                "@icon-url": process.env.NODE_ENV === "production" ?
                  '"/bonc-industry-fronted/static/iconfont/iconfont"' : '"/static/iconfont/iconfont"'
              }
            }
          }
        ]
      }
    ]
  }
};
