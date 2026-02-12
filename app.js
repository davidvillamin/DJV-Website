const   path                    = require("path"),
        express                 = require("express"),
        app                     = express();

const PORT = 3000;

const VIEWS_DIR = path.join(__dirname, "view");
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/view', express.static(__dirname + '/view/'));
app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.get("/", function (req, res) {
    res.render("Landing_Page");
});
app.get("/about", function (req, res) {
    res.render("About_Page");
});
app.get("/services", function (req, res) {
    res.render("Services_Page");
});


app.use(function (req, res) {
    res.status(404).send("Page not found");
});

app.use(function (err, req, res, next) {
    res.status(500).send("Something went wrong");
});

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
