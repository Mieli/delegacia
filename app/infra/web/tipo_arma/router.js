const controller = require('./controller')

class TipoArmaRouter{
    config(router){
        router.get('/tipo-arma/formulario', controller.form)
        router.get('/tipo-arma/listar', controller.listar)
    }
}

module.exports = new TipoArmaRouter()