const controller = require('./controller')

class BairroRouter{
    config(router){
        router.get('/bairro/formulario', controller.form)
        router.get('/bairro/listar', controller.listar)
    }
}

module.exports = new BairroRouter()