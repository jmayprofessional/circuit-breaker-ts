"use strict";
// index.ts
// below is a simple express server designed to listen on port 3000, it'll indicate whether it's running or not in the console by logging out "listening etc" at the bottom.
// this will be listening to get requets on locahost:3000 and randomly failing with status 400 or responding with status 200.
// we'll use this endpoint to test our circuit breaker
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    if (Math.random() > 0.5) {
        res.status(200).send("Success!");
    }
    else {
        res.status(400).send("Failed!");
    }
});
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
//# sourceMappingURL=index.js.map