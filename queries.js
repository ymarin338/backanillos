var conexion = require('./connections');

function MetodoDB(){
 this.seleccionar = function(respuesta){
     conexion.obtener(function (er, cn){
         cn.query('select id, nombre, imagen from categorias', function(error, resultado){
            cn.release();
            if(error){
             respuesta.json({estado:'Error'});
         } else{
             respuesta.send(resultado);
         }

     })
 })
}

    this.seleccionarId = function(id, respuesta){
        conexion.obtener(function(er, cn){
            cn.query('select * from categorias where id=?', id, function(error, resultado){
              cn.release();
                if(error){
                    respuesta.send({estado:'Error'});
                }else{
                    respuesta.send(resultado);
                }
            })
        })
    }

        this.insertar = function(datos, respuesta){
            conexion.obtener(function(er, cn){
                cn.query('insert into categorias set?', datos, function(error, resultado){
                    cn.release();
                    if (error){
                        respuesta.send({estado: 'Error'});
                    } else{
                        respuesta.send({estado: 'Ok'});
                    }
                })
            })
        }

        this.actualizar = function(datos, respuesta){
            conexion.obtener(function(er, cn){
                
                cn.query('update categorias set ? where id=?', [datos, datos.id], function(error, resultado){
                    cn.release();
                    if (error){
                        respuesta.send({estado: 'Error'});
                    } else{
                        respuesta.send({estado: 'Ok'});
                    }
                })
            })
        }

        this.borrar = function(id, respuesta){
            conexion.obtener(function(er, cn){
              
                cn.query('delete from categoria where id=?',id, function(error, resultado){
                    cn.release();
                    if (error){
                        respuesta.send({estado: 'Error'});
                    } else{
                        respuesta.send({estado: 'Ok'});
                    }
                })
            })
        }
        this.seleccionarTestimonios = function(respuesta){
            conexion.obtener(function (er, cn){
                cn.query('select * from testimonios t', function(error, resultado){
                
                if(error){
                    respuesta.send({estado:'Error'})
                } else{
                    respuesta.send(resultado);
                }
       
            })
        })
       }
        this.seleccionarSubCate = function(respuesta){
            conexion.obtener(function (er, cn){
                cn.query('select * from subcategorias', function(error, resultado){
                
                if(error){
                    respuesta.send({estado:'Error'})
                } else{
                    respuesta.send(resultado);
                }
       
            })
        })
       }
        this.seleccionarSubCateId = function(id, respuesta){
               conexion.obtener(function(er, cn){
                   cn.query('select * from subcategorias where id=?', id, function(error, resultado){
                       
                       if(error){
                           respuesta.send({estado:'Error'});
                       }else{
                           respuesta.send(resultado);
                       }
                   })
               })
           }
       
               this.insertarSubCate = function(datos, respuesta){
                   conexion.obtener(function(er, cn){
                       cn.query('insert into subcategorias set?', datos, function(error, resultado){
                           
                           if (error){
                               respuesta.send({estado: 'Error'});
                           } else{
                               respuesta.send({estado: 'Ok'});
                           }
                       })
                   })
               }
       
               this.actualizarSubCate = function(datos, respuesta){
                   conexion.obtener(function(er, cn){
                       
                       cn.query('update subcategorias set ? where id=?', [datos, datos.id], function(error, resultado){
                           if (error){
                               respuesta.send({estado: 'Error'});
                           } else{
                               respuesta.send({estado: 'Ok'});
                           }
                       })
                   })
               }
       
               this.borrarSubCate = function(id, respuesta){
                   conexion.obtener(function(er, cn){
                       
                       cn.query('delete from subcategorias where id=?',id, function(error, resultado){
                           if (error){
                               respuesta.send({estado: 'Error'});
                           } else{
                               respuesta.send({estado: 'Ok'});
                           }
                       })
                   })
               }
               this.seleccionarProducto = function(respuesta){
                conexion.obtener(function (er, cn){
                    cn.query('select * from productos', function(error, resultado){
                    if(error){
                        respuesta.send({estado:'Error'})
                    } else{
                        respuesta.send(resultado);
                    }
           
                })
            })
           }
           
               this.seleccionarProductoId = function(id, respuesta){
                   conexion.obtener(function(er, cn){
                       cn.query('select * from productos where id=?', id, function(error, resultado){
                        cn.release();
                           if(error){
                               respuesta.send({estado:'Error'});
                           }else{
                               respuesta.send(resultado);
                           }
                       })
                   })
               }
           
                   this.insertarProducto = function(datos, respuesta){
                       conexion.obtener(function(er, cn){
                           cn.query('insert into productos set?', datos, function(error, resultado){
                            cn.release();
                               if (error){
                                   respuesta.send({estado: 'Error'});
                               } else{
                                   respuesta.send({estado: 'Ok'});
                               }
                           })
                       })
                   }
           
                   this.actualizarProducto = function(datos, respuesta){
                       conexion.obtener(function(er, cn){
                           
                           cn.query('update productos set ? where id=?', [datos, datos.id], function(error, resultado){
                            cn.release();  
                            if (error){
                                   respuesta.send({estado: 'Error'});
                               } else{
                                   respuesta.send({estado: 'Ok'});
                               }
                           })
                       })
                   }
           
                   this.borrarProducto = function(id, respuesta){
                       conexion.obtener(function(er, cn){
                           
                           cn.query('delete from productos where id=?',id, function(error, resultado){
                            cn.release();   
                            if (error){
                                   respuesta.send({estado: 'Error'});
                               } else{
                                   respuesta.send({estado: 'Ok'});
                               }
                           })
                       })
                   }

                   this.buscarProductoxcategoria = function(id, respuesta){
                    conexion.obtener(function(er, cn){
                        
                        cn.query('SELECT p.id , p.nombre, p.precio FROM productos p join categorias c on c.id = p.categoria WHERE c.id=?',id, function(error, resultado){
                            cn.release();
                            if (error){
                                respuesta.send({estado: 'Error'});
                            } else{
                                respuesta.send({success:true, resultado});
                            }
                        })
                    })
                }
                this.DetalleProducto = function(id, respuesta){
                    conexion.obtener(function(er, cn){
                        
                        cn.query('SELECT p.id , p.nombre, p.precio, c.descripcion FROM productos p join categorias c on c.id = p.categoria WHERE c.id=?',id, function(error, resultado){
                            cn.release();
                            if (error){
                                respuesta.send({estado: 'Error'});
                            } else{
                                respuesta.send({success:true, resultado});
                            }
                        })
                    })
                }
                
                this.TraerImagenProductoid = function(id, respuesta){
                    conexion.obtener(function(er, cn){
                        
                        cn.query('SELECT p.imagen FROM productos p join categorias c on c.id = p.categoria WHERE p.id=?',id, function(error, resultado){
                            cn.release();
                            if (error){
                                respuesta.send({estado: 'Error'});
                            } else{
                                let base64 = resultado[0] ? resultado[0].imagen:null;
                                if (base64){
                                    base64 = base64.replace("data:image/jpeg;base64,", "")
                                    base64 = base64.replace("data:image/png;base64,", "")
                                    let binary = new Buffer(base64,'base64')
                                    respuesta.writeHead(200,{
                                        'Content-Type':'image/jpeg',
                                        'Content-Length':binary.length
                                    })
                                    respuesta.end(binary)
                                }else{
                                    
                                    respuesta.end(null)
                                }
                            } 
                        })
                    })
                }
}

module.exports = new MetodoDB();