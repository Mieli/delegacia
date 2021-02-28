const controller = require('./controller')

class CriminosoRouter{
    config(router){
        router.get('/criminoso/formulario', controller.form)
        router.get('/criminoso/listar', controller.listar)
    }
}

module.exports = new CriminosoRouter()