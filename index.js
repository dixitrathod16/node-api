const { response } = require("express");
const express = require("express");
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/getdocs", (req, res) => {
	res.status(200).send(data);
});

app.listen(port, () => {
	console.log(`Server is running at ${port}`);
});
