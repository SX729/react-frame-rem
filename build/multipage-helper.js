'use strict'
const path = require('path')
const glob = require('glob')
const config = require('../config')
const srcDir = path.resolve(__dirname, '../src')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPath = config.entryPath || 'src'

//return files
function getFiles (path) {
  return glob.sync(path)
}
//return fileName by filePath
function getFileName (filepath) {
  let splitArr = filepath.split('/');
  let jsFile = splitArr[splitArr.length - 1];
  return jsFile.split('.')[0]
}

//return entries
exports.getEntries = ()=>{
  //获取所有入口文件
  let jsFiles = getFiles(config.entryPath + '/*.js'),
      entries = {};
  jsFiles.forEach(function(filepath) {
    let fileKey = getFileName(filepath)
    entries[fileKey] = './' + filepath
  })
  return entries
}
function getHWPBaseOption (templatePath,fileName,env) {
  let option = {
    filename : fileName + '.html',//输出的html路径
    template : templatePath, //html模板路径
    inject : true,
    chunks : ['manifest','vendor'], //打包时只打包main和a的js文件，见entry，注意使用chunks时模板index.html文件里面不允许有script标签，即使注释掉也会报错
  }
  option.chunks.push(fileName)
  //如果是生产环境
  if(env === 'production'){
    option.minify = {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
    option.chunksSortMode = 'dependency'
  }
  return option
}
/**
 * 返回模板   如果自定义了就使用自定义的模板，如果未自定义，则使用根目录下的index.html
 * @param env
 * @returns {Array}
 */
exports.generateHtmlWebpackPlugin = (env)=>{
  let htmlFiles = getFiles(config.entryPath + '/*.html'),
      jsFiles = getFiles(config.entryPath + '/*.js'),
      htmlWebpackPlugins = [],
      htmlFileMap = {}
  //将html文件名作为key  路劲作为path
  htmlFiles.forEach(function(filepath) {
    htmlFileMap[getFileName(filepath)] = filepath
  })
  jsFiles.forEach(function(filepath) {
    let jsFileName = getFileName(filepath)
    let HWPBaseOption
    //如果为这个页面指定了模板文件，则使用指定的
    if(htmlFileMap[jsFileName]){
      HWPBaseOption = getHWPBaseOption(htmlFileMap[jsFileName] ,jsFileName,env)
    }else{//否则使用默认的模板文件
      HWPBaseOption = getHWPBaseOption('index.html',jsFileName,env)
    }
    htmlWebpackPlugins.push(new HtmlWebpackPlugin(HWPBaseOption))
  })
  return htmlWebpackPlugins;
}

