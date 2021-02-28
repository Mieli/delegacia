const controller = require('./controller')

class TipoArmaRouter{
    config(router){
        router.get('/tipo-arma/formulario', controller.form)
        router.get('/tipo-arma/listar', controller.listar)
        router.post('/tipo-arma/cadastrar', controller.cadastrar)
        router.get('/tipo-arma/remover/:id', controller.remove)
    }
}

module.exports = new TipoArmaRouter()