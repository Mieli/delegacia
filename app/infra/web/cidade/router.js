const controller = require('./controller')

class CidadeRouter{
    config(router){
        router.get('/cidade/formulario', controller.form)
        router.get('/cidade/listar', controller.listar)
    }
}

module.exports = new CidadeRouter()