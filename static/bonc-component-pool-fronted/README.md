# 前端React开发框架规范定义

## 一、前端知识栈要求

> Node、npm、yarn、webpack、ES6、Lodash、ESLint、mock、less、sass  

## 使用说明

```bash
# 拉取所有依赖
npm install

# 开发时启动应用, 默认端口: 8080
npm run dev

# 打包构建产品
npm run build

# lint the files
npm run lint

# fix eslint errors
npm run lint-fix
```
## 二、规范说明约定

### 1. 资源目录划分约定

```bash
project-root
|—— build               webpack构建时用到的相关设置
|—— config              构建相关配置              
|—— dist                前端代码压缩后放置的文件夹
├── src                 源码文件夹
│   ├── assets          静态文件（公共css及图片等）
│   │   ├── images      图片放置目录
│   ├── components      组件放置目录
│   │   ├── table       table组件（示例）
|   |   |   |——index.js     table组件入口类
|   |   |   |——index.less   table组件样式类
│   ├── config          源码程序基础配置类目录
|   |   |——index.js     基础配置类
│   ├── config          源码程序基础配置类目录
│   ├── redux           React Redux类实现放置目录
│   ├── routes          路由配置放置目录
│   ├── login        请求服务类实现放置目录
│   ├── utils           工具类实现放置目录
│   ├── view            视图(页面)类实现放置目录
│   ├── App.jsx         开发时应用入口类（开发时需要关注）
│   ├── App.less        应用入口样式类
│   ├── index.js         应用渲染入口类
├── static              静态文件（打包时不会被压缩）
│   ├── Config.js       不会被压缩的配置文件，方便发布应用后更改配置
│—— index.html          应用入口文件（开发时不需要关注）
│—— package.json        框架配置描述文件
```

### 2. 目录命名约定

**所有文件夹(包名)命名：**全小写英文，用"-"分隔词汇  

**推荐**
```bash
  包名: src/home-page/index.js
```
**不推荐**
```bash
  包名: src/homePage/index.js
        src/HOMEPAGE/index.js
        src/HOME-PAGE/index.js
```
### 3. 类命名约定

**文件(类)命名：** 采用驼峰式命名法

#### 驼峰式命名法介绍  
  
  * Pascal Case 大驼峰式命名法：首字母大写。如：StudentInfo、UserInfo、ProductInfo

  * Camel Case 小驼峰式命名法：首字母小写。如：studentInfo、userInfo、productInfo

  * 文件名不得含有空格

  * 文件名只使用小写字母，不使用大写字母。(为了醒目，某些说明文件的文件名，可以使用大写字母，如: README、LICENSE)

**推荐**
```bash
  类名: UserInfo.js、UserList.js、UserView.js、Config.js、index.js
```
**不推荐**
```bash
  类名: userinfo.js、userList.js、user-view.js
```

### 4. 类成员命名约定

**类成员命名：** 小驼峰式命名方法, 最好采用 类型+对象描述的方式  

**推荐**

```bash
  let userName = "王磊";
  let tableTitle = "userListTable";
  let getUserName = function(){};  
  动词前缀
  getXXX = function(){};
  setXXX = function(){};
  doXXX = function(){};
  isXXX = function(){};
  hasXXX = function(){};
  findXXX = function(){};
  queryXXX = function(){};
  buildXXX = funciton(){};
  createXXX = funcction(){};
  deleteXXX = function(){};
  removeXXX = funciton(){};
  XXXConverter function(){};
```
**不推荐**
```bash
  let name = "王磊";
  let title = "userListTable";
  let title1 = "userListTable";
  let tabletitle = "userListTable";
  let getusername = function(){};
```

### 4. 常量命名约定

**常量命名命名：** 全部大写, 使用大写字母和下划线来组合命名，下划线用以分割单词

**推荐**
```bash
  var MAX_COUNT = 10;
  var URL = 'http://www.baidu.com';
```

### CSS 命名约定

**css类命名：** 语义化, 全小写英文，用"-"分隔词汇

**推荐**
```bash
  .ext-panel-bwrap
  .ext-panel-body
  .ext-grid-header
  .ext-grid-header-inner
  .ext-grid-body
```
## 三、ESLint 配置  

  js代码检查风格，使用的是[standard](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style)及 [standard-react](https://github.com/feross/eslint-config-standard-react)，很严格的代码检查，强烈建议不要关闭，只要坚持一段时间程序员编码水平有很大提高，非常有利于以后的代码维护工作，下面会介绍通过代码编辑器自动修复代码风格错误。

## 四、前端开发神器推荐及配置——VSCode

### Visual Studio Code 介绍

  是一款免费开源的现代化轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比 Diff、GIT 等特性，支持插件扩展，并针对网页开发和云端应用开发做了优化。软件跨平台支持 Win、Mac 以及 Linux;

  [官方下载](https://code.visualstudio.com/)  
  [官方教程](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)  

### 基本设置

  - vscode用户可安装eslint插件，并添加`"eslint.autoFixOnSave": true`到配置项中，即可实现保存文件时，自动修复代码风格错误
  - vscode保存时自动格式化配置`"editor.formatOnSave": true`
  - vscode设置一个制表符等于的空格数 `"editor.detectIndentation": false`及`"editor.tabSize": 2`





  
