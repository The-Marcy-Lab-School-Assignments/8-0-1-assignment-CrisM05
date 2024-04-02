const express = require("express");
const app = express();
const path = require("path");
const pathToDist = path.join(__dirname,"..","/app","/dist");

const getTimeLocal = (req,res,next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
}

app.use(getTimeLocal);
app.use(express.static(pathToDist));

app.listen(8080,() => console.log("listening on port 8080"))