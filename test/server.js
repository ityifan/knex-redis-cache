const http = require('http')
class App {
    constructor() {
        this.serverObj = {}
        this.server = http.createServer()
        this.server.on('request', (req, res) => {
            res.writeHead(200, { 'content-Type': 'application/json' });
            let url = req.url
            url in this.serverObj ? this.serverObj[url](req, res) : res.end(JSON.stringify({ code: 200, message: 'NotFoundThisRoute' }))
        })
    }
    async on(url, fn) {
        this.serverObj[url] = fn
    }
    async run(port) {
        this.server.listen(port, () => {
            console.log("服务器正在" + port + "端口运行！http://localhost:3000");
        })
    }
}
module.exports = App