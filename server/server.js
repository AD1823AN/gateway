const express = require("express");
const cors = require ("cors");
const logger = require ("../middlewares/logger");
const gatewayRouters = require("../Routers/gateway.routers")

class Server{
    constructor(port){
        this.app = express();
        this.port = port;
        this.middlewares();
        this.routers();
        
    }
    middlewares(){
        this.app.use(cors());
        //this.app.use(express.json());
        this.app.use(logger);
    }

    routers(){
        this.app.use(gatewayRouters)
    }

star(){
    this.app.listen(this.port,()=>
    console.log("Gateway corriendo en http://localhost:" + this.port))
}

   
}
module.exports = Server;