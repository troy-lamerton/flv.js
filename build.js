const browserify = require('browserify');
const rimraf = require('rimraf');

const bundle = browserify({
    entries: 'src/index.js',
    standalone: 'flvjs',
    debug: true,
    transform: ['babelify', 'browserify-versionify'],
    plugin: ['browserify-derequire']
}).bundle();

const fs = require('fs');
rimraf.sync('./dist');
fs.mkdirSync('./dist');

// write bundle to file
const writeStream = fs.createWriteStream('./dist/flv.js');
bundle.pipe(writeStream);
