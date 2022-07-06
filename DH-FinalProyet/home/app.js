const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, './public');
const mainRouter = require('./routers/main')
const rutaLogin = require('./routers/login')
const rutaProductColeccion = require('./routers/products')
const rutaRegister = require('./routers/register')

app.set('view engine', 'ejs');
app.use(express.static(publicPath));
app.use("/login", rutaLogin);
app.use("/",mainRouter );
app.use("/coleccion", rutaProductColeccion);
app.use("/coleccion", rutaProductColeccion);
app.use('/coleccion', rutaProductColeccion)
app.use("/registro",rutaRegister );



app.listen(3031, () =>{
    console.log("Servidor corriendo en el puerto 3031")
});
