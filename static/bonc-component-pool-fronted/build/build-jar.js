const fs = require('fs');
var pkg = require('../package.json');
var maven = require('maven-deploy');

var config = {
  'groupId': 'com.bonc.industry',
  'artifactId': '{name}',
  'buildDir': 'dist-jar',
  'finalName': '{name}-{version}',
  'type': 'jar',
  'fileEncoding': 'utf-8'
};

config.snapshotRepositories = pkg.publishConfig.snapshotRepositories;
config.repositories = pkg.publishConfig.repositories;

if (!fs.existsSync('dist-jar')) {
  fs.mkdirSync('dist-jar');
}
if (!fs.existsSync('dist-jar/META-INF')) {
  fs.mkdirSync('dist-jar/META-INF');
}

if (!fs.existsSync('dist-jar/META-INF/resources')) {
  fs.mkdirSync('dist-jar/META-INF/resources');
}

if (!fs.existsSync('dist-jar/META-INF/resources/' + pkg.name)) {
  fs.mkdirSync('dist-jar/META-INF/resources/' + pkg.name);
}

var stat = fs.stat;
var copy = function (src, dst) {
  //读取目录
  fs.readdir(src, function (err, paths) {
    console.log(paths)
    if (err) {
      throw err;
    }
    paths.forEach(function (path) {
      var _src = src + '/' + path;
      var _dst = dst + '/' + path;
      var readable;
      var writable;
      stat(_src, function (err, st) {
        if (err) {
          throw err;
        }

        if (st.isFile()) {
          readable = fs.createReadStream(_src); //创建读取流
          writable = fs.createWriteStream(_dst); //创建写入流
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
  });
}

var exists = function (src, dst, callback) {
  //测试某个路径下文件是否存在
  fs.exists(dst, function (exists) {
    if (exists) { //不存在
      callback(src, dst);
    } else { //存在
      fs.mkdir(dst, function () { //创建目录
        callback(src, dst)
      })
    }
  })
}
console.log('******************************************************************************')
console.log('******************************************************************************')
console.log('***************** 建议您选择执行 npm run build 命令 ****************************')
console.log('******************************************************************************')
console.log('******************************************************************************')

function install() {

  if (!fs.existsSync('dist-jar')) {
    fs.mkdirSync('dist-jar');
  }
  if (!fs.existsSync('dist-jar/META-INF')) {
    fs.mkdirSync('dist-jar/META-INF');
  }

  if (!fs.existsSync('dist-jar/META-INF/resources')) {
    fs.mkdirSync('dist-jar/META-INF/resources');
  }

  if (!fs.existsSync('dist-jar/META-INF/resources/' + pkg.name)) {
    fs.mkdirSync('dist-jar/META-INF/resources/' + pkg.name);
  }

  //检查是否存在，，拷贝目录到dist-jar/META-INF/resources/
  exists('./dist', './dist-jar/META-INF/resources/' + pkg.name, copy);
}


var args = process.argv.splice(2);

if (args && args[0] === '-install') {
  install();
  maven.config(config);
  maven.install();
} else if (args && args[0] === '-deploy') {
  if (/^.*-SNAPSHOT$/i.test(pkg.version)) {
    config.repositories = config.snapshotRepositories;
    maven.config(config);
    maven.deploy('nexus-snapshots', false);
  } else {
    maven.config(config);
    maven.deploy('nexus-releases');
  }
}
