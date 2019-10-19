var mysql = require('mysql');

function Conexion(){
    this.pool = null;

    this.inicia = function(){
    this.pool = mysql.createPool({
        connectionLimit: 100,
        host:'anillosdetradicionnaval.com',
        user:'anillosd',
        password:'3u4f8m9gWC',
        database:'anillosd_buena'
    })
}
 this.obtener = function(callback){
     this.pool.getConnection(function(error, connection){
         callback(error, connection);
     })
 }
}

module.exports = new Conexion();