const controller = require('./controller')

class CriminosoRouter{
    config(router){
        router.get('/criminoso/formulario', controller.form)
        router.get('/criminoso/listar', controller.listar)
        router.post('/criminoso/cadastrar', controller.cadastrar)
        router.get('/criminoso/remover/:id', controller.remove)
    }
}

module.exports = new CriminosoRouter()