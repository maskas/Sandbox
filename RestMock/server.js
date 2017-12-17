const express = require('express')
const expressMongoDb = require('express-mongo-db');
const cookieParser = require('cookie-parser');
const mock = require('./controller/mock')

const app = express()

app.use(cookieParser())
app.use(expressMongoDb('mongodb://mongo:27017/mock'));

app.get('/restmock', (req, res) => res.send('Hello World!'))

app.all('/*', mock)

const port = 8081
app.listen(port, () => console.log(`REST mock listening on port ${port}!`))
