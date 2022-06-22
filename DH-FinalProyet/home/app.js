const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, './public');
const mainRouter = require('./routers/main')
const rutaLogin = require('./routers/login')

app.use(express.static(publicPath));

app.use("/login", rutaLogin);
app.use("/",mainRouter );

app.get("/productDetail", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./views/productDetail/productDetail.html")
    );
});
app.get("/coleccion", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views//coleccion.html")
  );
});
app.get("/registro", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "./views/registro.html"))
})
app.listen(3031, () =>{
    console.log("Servidor corriendo en el puerto 3031")
});
