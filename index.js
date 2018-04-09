var exec = require('child_process').exec;
var port = process.env.PORT || 4000;
var hexoProcess = exec('hexo server -p ' + port);
hexoProcess.stdout.on('data', (data) => {
    console.log(data.toString());
});
