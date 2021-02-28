const {
    FindAllUseCase,
    FindByIdUseCase,
    SaveUseCase,
    RemoveUseCase
} = require('../../../usecase/tipo-arma')

class TipoArmaController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let tipoArma = null
        if(id && id != 'novo'){
            tipoArma = FindByIdUseCase.execute(id)
        } 
        res.render('tipo_arma/form.html', { tipoArma })
    }

    listar(req, res){
        const tipoArmas = FindAllUseCase.execute()
        res.render('tipo_arma/list.html', { tipoArmas })
    }


    cadastrar(req, res){
        let {id, description } = req.body
        id = parseInt(id)
        const tipoArma = {
            id,
            description
        }
        SaveUseCase.execute(tipoArma)
        res.redirect('/tipo-arma/listar')
    }

    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/tipo-arma/listar')
    }

}

module.exports = new TipoArmaController()