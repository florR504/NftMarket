const path = require('path');

const home = {
    main : (req, res)=>{ res.sendFile(path.resolve(__dirname, "../views/home.html")) }
}

module.exports= home;