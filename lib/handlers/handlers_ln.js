const path = require("path");

exports.mostrarHTML = (req, res) => {
    res.sendFile("adopta.html", {
        root: path.join(__dirname + "/../../public")
    })
}



exports.error404 = (req, res) => {
    let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${req.path}`
    res.status(404);
    res.render("404", {
        url: url
    })
}

exports.error500 = (req, res) => {
    res.status(500);
    res.render("500", {
        error: err.message
    });
}