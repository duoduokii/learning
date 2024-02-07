const http = require("http");
const port = 3000;

function updateTime() {
	setInterval(() => (this.time = new Date().toUTCString()), 1000);
	return this.time;
}

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Expires", new Date(2021, 10, 20).toUTCString());
	res.end(`Html Update Time: ${updateTime()}`);
});

server.listen(port, () => {
	console.log(`服务器运行在 http://127.0.0.1:${port}/`);
});
