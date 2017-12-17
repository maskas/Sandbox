
module.exports = function(req, res, next) {

    const reqData = extractRequestData(req);
    req.db.collection('requests').insertOne(reqData, (err, res) => {
        if (err) throw err
        console.log("1 request inserted", reqData)
    });
    res.send('Request stored!');

}


function extractRequestData(req) {
    return {
        method: req.method,
        path: req.path,
        query: { ... req.query },
        cookies: req.cookies
    };
}
