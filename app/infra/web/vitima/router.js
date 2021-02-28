const controller = require('./controller')

class VitimaRouter{
    config(router){
        router.get('/vitima/formulario', controller.form)
        router.get('/vitima/listar', controller.listar)
    }
}

module.exports = new VitimaRouter()