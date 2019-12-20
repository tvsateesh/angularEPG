var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic('dist', { 'index': ['default.html', 'default.htm'] }))
app.listen(80)