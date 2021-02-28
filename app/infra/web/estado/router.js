const controller = require('./controller')

class EstadoRouter{
    config(router){
        router.get('/estado/formulario', controller.form)
        router.get('/estado/listar', controller.listar)
        router.post('/estado/cadastrar', controller.cadastrar)
        router.get('/estado/remover/:id', controller.remove)
    }
}

module.exports = new EstadoRouter()