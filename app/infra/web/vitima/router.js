const controller = require('./controller')

class VitimaRouter{
    config(router){
        router.get('/vitima/formulario', controller.form)
        router.get('/vitima/listar', controller.listar)
        router.post('/vitima/cadastrar', controller.cadastrar)
        router.get('/vitima/remover/:id', controller.remove)
    }
}

module.exports = new VitimaRouter()