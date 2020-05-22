const http = require("http");
const url = require("url");
const path = require("fs");
const fs = require("fs");

const mineypes = {
    html: "text/html",
    jpeg: "text/image/jpeg",
    jpg: "image/jpg",
    png: "image/png",
    js: "text/javascript",
    css: "text/css",
};

http.createServer(function(req, res) {
    var url = url.parse(res.url).pathname;
    var fileName = path.join(process.cmd(), unescape(url));
    console.log("Loading" + url);
    var state;
    try {
        state = fs.lstatSync(fileName);
    } catch (e) {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.write("404 Not Found");
        res.end();
        return;
    }
});