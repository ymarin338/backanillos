var db=require('./queries');

function http(){
    this.configurar = function(app){

        app.get('/' , (req, resp) =>{
            resp.json({ok:true})
        })
        app.get('/categorias', function(solicitud, respuesta){
          try {
            db.seleccionar(respuesta);
          } catch (error) {
              respuesta.json({error:true, message:error.message})
          }
        })

        app.get('/categorias/:id/', function(solicitud, respuesta){
            db.seleccionarId(solicitud.params.id, respuesta);
        })
        app.post('/categorias/', function(solicitud, respuesta){
            db.insertar(solicitud.body, respuesta);
        })

        app.put('/categorias/', function(solicitud, respuesta){
            db.actualizar(solicitud.body, respuesta);
        })

        app.delete('/categorias/:id/', function(solicitud, respuesta){
            db.borrar(solicitud.params.id, respuesta);
        })

        app.get('/subcategorias', function(solicitud, respuesta){
            db.seleccionarSubCate(respuesta);
        })

        app.get('/subcategorias/:id/', function(solicitud, respuesta){
            db.seleccionarSubCateId(solicitud.params.id, respuesta);
        })
        app.post('/subcategorias/', function(solicitud, respuesta){
            db.insertarSubCate(solicitud.body, respuesta);
        })

        app.put('/subcategorias/', function(solicitud, respuesta){
            db.actualizarSubCate(solicitud.body, respuesta);
        })

        app.delete('/subcategorias/:id/', function(solicitud, respuesta){
            db.borrarSubCate(solicitud.params.id, respuesta);
        })
        app.get('/productos', function(solicitud, respuesta){
            db.seleccionarProducto(respuesta);
        })
        app.get('/testi', function(solicitud, respuesta){
            db.seleccionarTestimonios(respuesta);
        })

        app.get('/productos/:id/', function(solicitud, respuesta){
            db.seleccionarProductoId(solicitud.params.id, respuesta);
        })
        app.post('/productos', function(solicitud, respuesta){
            db.insertarProducto(solicitud.body, respuesta);
        })

        app.put('/productos', function(solicitud, respuesta){
            db.actualizarProducto(solicitud.body, respuesta);
        })

        app.delete('/productos/:id', function(solicitud, respuesta){
            db.borrarProducto(solicitud.params.id, respuesta);
        })
        app.get('/productos/category/:id',function(solicitud, respuesta){        
          db.buscarProductoxcategoria(solicitud.params.id, respuesta);
        })
        app.get('/products/:id',function(solicitud, respuesta){        
            db.DetalleProducto(solicitud.params.id, respuesta);
          })
        app.get('/productos/:id/image',function(solicitud, respuesta){        
            db.TraerImagenProductoid(solicitud.params.id, respuesta);
          })
  
        
    }

}
module.exports = new http();