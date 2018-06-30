const fs = require("fs");
const path = require("path");

const defaultRoot = "index.html";
const basePath = "./src";

// url to to dynamic pages and static resources
// (defaults to index.html)
const getLocalPath = (url) => {
    const requestDir = basePath + url

    return (requestDir == `${basePath}/`)
        ? requestDir + defaultRoot
        : basePath + url
}

// reduce resource Content-Type
const getContentType = (extname) => {
    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        "json": "text/json",
        "svg": "image/svg+xml",
        "ico": "image/x-icon",
        "mp4": "video/mp4",
        "default": "text/html"
    }
    
    return contentTypes[extname] || contentTypes["default"]
}

// Compose response for dynamic dynamic pages and static resources and file types
const dispatch = (request, response) => {
    const filePath = getLocalPath(request.url)
    const contentType = getContentType(path.extname(filePath))

    fs.readFile(filePath, (err, content) => {
        if (err) {
            const { syscall, code } = err
            console.error(`When trying to ${syscall} "${filePath}" receved ${code} error. ${(code === "ENOENT") ? `ENOENT (file doesnt exist)` : code}`)
        }

        if (err) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": contentType
            });

            response.end(content, "utf-8");
        }
    })
}

module.exports = {
    dispatch,
    getLocalPath,
    getContentType
}