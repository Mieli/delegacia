const controller = require('./controller')

class CrimeRouter{
    config(router){
        router.get('/crime/formulario', controller.form)
        router.get('/crime/listar', controller.listar)
    }
}

module.exports = new CrimeRouter()