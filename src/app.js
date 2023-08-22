const express = require('express');
const path = require('path');
const app = express();


//Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares globales
const publicPath = path.join(__dirname, 'public');
 console.log(publicPath);
 app.use(express.static(publicPath));

//Sistema de rutas
 const mainRoutes = require("./routes/main.js");

 app.use('/', mainRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});



module.exports = app;