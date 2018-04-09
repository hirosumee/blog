var exec = require('child_process').exec;
var http = require('http');
var port = process.env.PORT || 4000;
var hexoProcess = exec('hexo server -p ' + port);
hexoProcess.stdout.on('data', (data) => {
    console.log(data.toString());
});

function autoload() {
    setTimeout(() => {
        http.get('https://minblog.herokuapp.com', function () {
            autoload();
        });
    }, 300000);
}
autoload();