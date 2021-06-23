import express from 'express'
import "reflect-metadata"
import { router } from './Router';

import "./database"

const app = express();

app.use(router)

// http://localhost:port
app.listen(3000, () => console.log('server is runing nwl'))
