const express = require('express');
const router = express.Router();

router.use(function(err, req, res, next){
    if (!module.children) console.error(err.stack);
    res.status(err.status || 500);
    res.render('500', { error: err });
});

router.use("/", function (req, res){
    res.status(404);
    res.format({
        html: function () {
            res.render('pages/404', { url: req.url })
        },
        json: function () {
            res.json({ error: 'Not found' })
        },
        default: function () {
            res.type('txt').send('Not found')
        }
    })
});

module.exports = router;