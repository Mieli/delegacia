const controller = require('./controller')

class BairroRouter{
    config(router){
        router.get('/bairro/formulario', controller.form)
        router.get('/bairro/listar', controller.listar)
        router.post('/bairro/cadastrar', controller.cadastrar)
        router.get('/bairro/remover/:id', controller.remove)
    }
}

module.exports = new BairroRouter()