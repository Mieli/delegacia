const { 
   SaveUseCase,
   FindAllUseCase,
   FindByIdUseCase,
   RemoveUseCase 
} = require('../../../usecase/arma')

class ArmaController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let arma = null
        if(id && id !== 'novo'){
            arma = FindByIdUseCase.execute(id)
        }
        res.render('arma/form.html', {arma})
    }

    listar(req, res){
        const armas = FindAllUseCase.execute()
        res.render('arma/list.html', {armas})
    }

    cadastrar(req, res){
        let {id, description, tipo} = req.body
        id = parseInt(id)
        const arma = {
            id,
            description,
            tipo
        }
        SaveUseCase.execute(arma)
        res.redirect('/arma/listar')
    }
    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/arma/listar')
    }
}

module.exports = new ArmaController()