var mysql = require('mysql');

function Conexion(){
    this.pool = null;

    this.inicia = function(){
    this.pool = mysql.createPool({
        connectionLimit: 100,
        host:'database-2.chyxut0hvq98.us-east-2.rds.amazonaws.com',
        user:'admin',
        password:'Colombia2019',
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