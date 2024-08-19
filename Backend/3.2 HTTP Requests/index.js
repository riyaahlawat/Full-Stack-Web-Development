import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("Hello, World!");
    res.send("<h1>can send fully formatted html</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1>its me.</h1><p>riya this side.");
});

app.get("/contact", (req, res) => {
    res.send("<h1>email id mentioned.</h1>");
});

app.listen(port, () => {
    console.log(`port is set up at ${port}.`)
});