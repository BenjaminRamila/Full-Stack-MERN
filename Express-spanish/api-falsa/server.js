const express = require("express");
const app = express();
const port = 8000;

app.use(express.json()); //cada req pasa por aqui primero 
app.use(express.urlencoded({ extended: true }));

// req is shorthand for request
// res is shorthand for response
app.use("/api", require(".api/")); //llama a index

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
