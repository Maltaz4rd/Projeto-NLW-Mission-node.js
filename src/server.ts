import express from 'express'
import "reflect-metadata"

import "./database"

const app = express();

app.get("/test", (req, res) => {
    return res.send("requisição get");
})
app.post("/test-post", (req, res) => {
    return res.send("requisição post")
})

// http://localhost:port
app.listen(3000, () => console.log('server is runing nwl'))
