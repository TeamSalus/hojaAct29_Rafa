const port = process.env.PORT || 3000;
const express = require("express");
const handlebars = require("express-handlebars");
const controlador = require("./routes/controlador.js");
const handlers_ln = require("./lib/handlers/handlers_ln.js");
const app = express();

app.set("port", port);

app.set("view engine", "handlebars")
app.engine("handlebars", handlebars({
    defaultLayout: "principal"
}));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use("/", controlador);
app.use(handlers_ln.error404)
app.use(handlers_ln.error500)

app.listen(port, () => console.log("Se esta escuchando el puerto 3000"));