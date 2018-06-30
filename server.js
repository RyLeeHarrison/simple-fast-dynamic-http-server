/**
 * Fast Dynamic HTTP Server
 * Dynamic HTTP server that automatically handles URL to local resource path and content-type headers
 * 
 * Dynamically composes a response that automatically handles: 
 *  - Request URL local directory path.
 *      (ex. "http://exampe.com/fag.html" will become "./fag.html")
 * 
 * Polymorphic Content-Type header.
 *  - reduces resource extension.
 *  - "http://exampe.com/style.css" -> "text/css"
 */

const {createServer} = require("http");
const {dispatch} = require("./dispatcher.js");

const config = {
    port: 8080,
    host: "127.0.0.1"
};

const server = createServer((req, res) => {
    try {
        dispatch(req, res);
    } catch(err) {
        console.error(err);
    }
});

server.listen(config.port, config.host, (err) => {
    if (err) {
        console.error(err);
    }

    console.log(`server running on port http://${config.host}:${config.port}/`);
});