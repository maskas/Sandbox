const express = require('express')
const app = express()

app.get('/restmock', (req, res) => res.send('Hello World!'))

app.all('/*', function (req, res, next) {
    res.send("Any URL")
})

app.listen(8081, () => console.log('Example app listening on port 8081!'))