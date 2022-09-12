const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, './public');
const mainRouter = require('./routers/main')
const rutaUser = require('./routers/user')
const rutaProductColeccion = require('./routers/products')
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


app.set('view engine', 'ejs');

app.use(session({
    secret: "secreto!",
    resave: false,
    saveUninitialized: false
}))
app.use(userLoggedMiddleware);//Middleware de aplicación
app.use(methodOverride('_method'))
app.use(express.static(publicPath));
//le indica a express que vamos a trabajar con JSON//
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use("/", rutaUser);
app.use("/home",mainRouter );
app.use("/productos", rutaProductColeccion);




app.listen(3031, () =>{
    console.log("Servidor corriendo en el puerto 3031")
});
