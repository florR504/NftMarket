const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, './public');
const mainRouter = require('./routers/main')
const rutaLogin = require('./routers/login')
const rutaProductColeccion = require('./routers/products')
const rutaRegister = require('./routers/register')
const usersRoutes = require("./routers/users");
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
app.use(express.static(publicPath));
app.use("/login", rutaLogin);
app.use("/",mainRouter );
app.use("/productos", rutaProductColeccion);
app.use("/registro",rutaRegister );

//le indica a express que vamos a trabajar con JSON//
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.listen(3031, () =>{
    console.log("Servidor corriendo en el puerto 3031")
});
