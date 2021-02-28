const controller = require('./controller')

class CidadeRouter{
    config(router){
        router.get('/cidade/formulario', controller.form)
        router.get('/cidade/listar', controller.listar)
        router.post('/cidade/cadastrar', controller.cadastrar)
        router.get('/cidade/remover/:id', controller.remove)
    }
}

module.exports = new CidadeRouter()