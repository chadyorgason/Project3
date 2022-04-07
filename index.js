let express = require("express");

let app = express();

let path = require("path"); //could be const also

const port = 3000;

//makes handling forms easier. 
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get("/utah_data", (req, res) => 
    {
        console.log("Seeing Utah Data");
        res.sendFile(path.join(__dirname + '/testimonials.html'));
    }
);

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use("/services.html", express.static(__dirname + "/services.html"));
app.use("/testimonials.html", express.static(__dirname + "/testimonials.html"));
app.use("/about.html", express.static(__dirname + "/about.html"));
app.use("/index.html", express.static(__dirname + "/index.html"));
app.use("/team.html", express.static(__dirname + "/team.html"));
app.use("/blog.html", express.static(__dirname + "/blog.html"));

app.listen(port, () => console.log("Start listening!"));