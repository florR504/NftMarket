const path = require('path');

const login = {
    ingresar:(req, res)=>{ res.sendFile(path.resolve(__dirname, "../views/login.html")) }
    
}
module.exports= login;