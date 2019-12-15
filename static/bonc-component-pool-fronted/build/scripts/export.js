const shell = require('shelljs')
shell.exec('babel src --out-dir lib/src --copy-files')
shell.exec('babel build/scripts/index.js --out-file lib/index.js')
