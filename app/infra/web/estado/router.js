const controller = require('./controller')

class EstadoRouter{
    config(router){
        router.get('/estado/formulario', controller.form)
        router.get('/estado/listar', controller.listar)
    }
}

module.exports = new EstadoRouter()