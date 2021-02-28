const controller = require('./controller')

class ArmaRouter{
    config(router){
        router.get('/arma/formulario', controller.form)
        router.get('/arma/listar', controller.listar)
        router.post('/arma/cadastrar', controller.cadastrar)
        router.get('/arma/remover/:id', controller.remove);
    }
}

module.exports = new ArmaRouter()