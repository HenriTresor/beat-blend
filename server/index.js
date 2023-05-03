import express from 'express'
import indexRoute from './routes/index.route.js'
import {config} from 'dotenv'


config()
const app = express()
const PORT = process.env.PORT || 6060
app.use('/', indexRoute)

app.listen(PORT, () => {
    console.log(`server is live on ${PORT}`);
})
