
# Simple Fast Dynamic HTTP Server

Dynamic HTTP server that automatically handles URL to local resource path and content-type headers


## Current Features
- Dynamically composes a response that automatically handles: 
	- Request URL local directory path. (ex. "http://exampe.com/fag.html" -> "./fag.html")
     
- Polymorphic Content-Type header.
	- reduces resource extension. (ex. "http://exampe.com/style.css" -> "text/css")


## Quick start

Clone and run

```sh
git clone https://github.com/RyleeHarrison/simple-fast-dynamic-http-server
cd simple-fast-dynamic-http-server.git
yarn start # or npm run start
```
