var express = require("express")
var path = require("path")
var app = express()

function getHomePage(req, res) {
	res.sendFile(__dirname + "/index.html")
	// res.sendFile(path, )
}

app.get("/", getHomePage)

// start server ด้วย port 5555
var server = app.listen(5555, function() {
	console.log("Express is running on port 5555.")
})
