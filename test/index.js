const App = require('./server')
const app = new App()
app.on('/message', async (req, res) => {
    res.end(JSON.stringify({ message: '这是一个message' }))
})
app.run(3000)