const path = require('path');

const register = {
      inicio: (req, res)=>{ res.sendFile(path.resolve(__dirname, "../views/registro.html")) },
}

module.exports = register;