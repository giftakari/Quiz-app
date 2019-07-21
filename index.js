const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "pug");

const routes = require("./routes");
const cardRoutes = require("./routes/cards");

app.use(routes);
app.use("/cards", cardRoutes);

app.listen(PORT, () => console.log(`App is running at ${PORT}`));
