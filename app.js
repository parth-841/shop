const path = require("path");
const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const { rootDir } = require("./utils/paths");

const app = express();

const db = require("./utils/database");

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.send("Page Not Found");
})

app.listen(8000,()=>{
    console.log("Server is running on port no. 8000...");
});