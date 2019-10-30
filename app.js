var express = require('express')
var path = require('path')
var app = express()

app.listen(8080, function(){
	console.log("app running at: http://localhost:8080")
})


app.get('/headlines', (req, resp) => {
	resp.sendFile(path.join(__dirname+'/htmls/demo1.html'))
})
