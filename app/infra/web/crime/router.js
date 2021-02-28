const controller = require('./controller')

class CrimeRouter{
    config(router){
        router.get('/crime/formulario', controller.form)
        router.get('/crime/listar', controller.listar)
        router.post('/crime/cadastrar', controller.cadastrar)
        router.get('/crime/remover/:id', controller.remove)
    }
}

module.exports = new CrimeRouter()